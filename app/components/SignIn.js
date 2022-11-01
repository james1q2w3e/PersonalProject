import React from 'react';
import { connect } from "react-redux";
import { authenticate } from '../redux/auth';

class SignIn extends React.Component {
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
    const { username, password } = this.state;
    console.log(username);
    try {
      await this.props.authenticate({
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
        <button>Sign In</button>
      </form>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: ({username, password}) => dispatch(authenticate({username, password}))
  }
}


export default connect(null, mapDispatchToProps)(SignIn);
