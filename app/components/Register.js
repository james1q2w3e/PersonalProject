import React from 'react';
import { connect } from "react-redux";
// import { authenticate } from '../redux/auth';
import { registered } from '../redux/auth';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  async onSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
    const { username, password } = this.state;
    try {
      await this.props.registered({
        username,
        password,
      });
    } catch(e) {
      console.log(e);
      this.setState({ error: e.response.data.error })
    }
  }

  // TODO: use bootstrap
  render() {
    const { username, password, error } = this.state;

    return (
      <form onSubmit={this.onSubmit} >
        { error }
        hello?
        <input value={username} onChange={this.onChange} name='username' />
        <input value={password} onChange={this.onChange} name='password' />
        <button>Register</button>
      </form>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registered: (username, password) => dispatch(registered({username, password}))
  }
}


export default connect(null, mapDispatchToProps)(Register);



















































// import React from 'react';
// import { connect } from "react-redux";
// import { useRef, useState, useEffect } from 'react';
// import SignIn from './SignIn';
// import { Link } from 'react-router-dom';
// import { registered } from '../redux/auth';

// // trying out "fontawesome" in this file (at least) (https://fontawesome.com/v6/docs/web/use-with/react/)
// import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


// // regex validations (https://www.youtube.com/watch?v=brcHK3P6ChQ)
// // must start with upper or lower case letter
// const USER_REGEX = /^[a-zA-z][a-zA-z0-9-_]{3,23}$/;
// // requires at least one lowercase, one uppercase, one digit, and one special character
// // must be 8-24 characters long
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


// const Register = () => {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState('');
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setPwd] = useState('');
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState('');
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus()
//   }, [])

//   useEffect(() => {
//     const result = USER_REGEX.test(user);
//     console.log(result);
//     console.log(user);
//     setValidName(result);
//   }, [user])

//   useEffect(() => {
//     const result = PWD_REGEX.test(pwd);
//     console.log(result);
//     console.log(pwd);
//     setValidPwd(result);
//     const match = pwd === matchPwd;
//     setValidMatch(match)
//   }, [pwd, matchPwd])

//   useEffect(() => {
//     setErrMsg('');
//   }, [user, pwd, matchPwd])

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // this is to prevent anyone from hacking the button to get around the REGEX requirements
//     const v1 = USER_REGEX.test(user);
//     const v2 = PWD_REGEX.test(pwd);
//     if(!v1 || !v2) {
//       setErrMsg('Invalid Entry');
//       return;
//     }
//     // console.log("Success", user, pwd);
//     await registered({user, pwd})
//     setSuccess(true)
//   }

//   // "aria" values are for screen readers / accessibility
//   return (
//     <>
//     {success ? (
//       <section>
//         <h1>Success!</h1>
//         <p>
//           <Link to='/signin'>Sign In</Link>
//         </p>
//       </section>
//     ) : (

    
//     <section>
//       {/* error message displayer */}
//       <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor='username'>
//           Username:
//           <span className={validName ? 'valid' : 'hide'}>
//             <FontAwesomeIcon icon={faCheck} />
//           </span>

//           <span className={validName || !user ? 'hide' : 'invalid'}>
//             <FontAwesomeIcon icon={faTimes} />
//           </span>

//         </label>
//           <input 
//             type='text'
//             id='username'
//             ref={userRef}
//             autoComplete="off"
//             onChange={(e) => setUser(e.target.value)}
//             required
//             aria-invalid={validName ? 'false' : 'true'}
//             aria-describedby='uidnote'
//             onFocus={() => setUserFocus(true)}
//             onBlur={() => setUserFocus(false)}
//           />
//           <p id='uidnote' className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
//             <FontAwesomeIcon icon={faInfoCircle} />
//             4 to 24 character.<br />
//             Must begin with a letter.<br />
//             Letters, numbers, underscores, hyphens allowed.
//           </p>

//           {/* end username, begin password */}

//           <label htmlFor='password'>
//           Password:
//           <span className={validPwd ? 'valid' : 'hide'}>
//             <FontAwesomeIcon icon={faCheck} />
//           </span>

//           <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
//             <FontAwesomeIcon icon={faTimes} />
//           </span>

//         </label>
//           <input 
//             type='password'
//             id='password'
//             autoComplete="off"
//             onChange={(e) => setPwd(e.target.value)}
//             required
//             aria-invalid={validPwd ? 'false' : 'true'}
//             aria-describedby='pwdnote'
//             onFocus={() => setPwdFocus(true)}
//             onBlur={() => setPwdFocus(false)}
//           />
//           <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
//             <FontAwesomeIcon icon={faInfoCircle} />
//             8 to 24 character.<br />
//             Must include uppercase and lowercase letters, a number and a special character.<br />
//             Allowed special characters: !@#$%.
//           </p>

//           {/* end pwd, begin pwd confirmation */}

//           <label htmlFor='confirm-pwd'>
//           Confirm Password:
//           <span className={validMatch && matchPwd ? 'valid' : 'hide'}>
//             <FontAwesomeIcon icon={faCheck} />
//           </span>

//           <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
//             <FontAwesomeIcon icon={faTimes} />
//           </span>

//         </label>
//           <input 
//             type='password'
//             id='confirm-pwd'
//             autoComplete="off"
//             onChange={(e) => setMatchPwd(e.target.value)}
//             required
//             aria-invalid={validMatch ? 'false' : 'true'}
//             aria-describedby='confirmnote'
//             onFocus={() => setMatchFocus(true)}
//             onBlur={() => setMatchFocus(false)}
//           />
//           <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
//             <FontAwesomeIcon icon={faInfoCircle} />
//             Must match the first password input field
//           </p>

//           <button disabled={!validName || !validPwd || !validMatch ? true : false}>
//             Sign Up
//           </button>
//       </form>
//       <p>
//         Already registered?<br />
//         <span className='line'>
//           <Link to='/signin'>Sign In</Link>
//         </span>
//       </p>
//     </section>
//     )} {/* closing tag for ternary checking for success (line 79-ish) */}
//     </>
//   )
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     registered: (({user, pwd}) => {dispatch(registered({user, pwd}))}),
//   }
// }

// export default connect(null, mapDispatchToProps)(Register);