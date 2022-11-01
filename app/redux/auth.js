import axios from "axios";
const TOKEN = 'token';

// ACTION types
const SET_AUTH = 'SET_AUTH';
const REGISTER = 'REGISTER'

// ACTION creators
const setAuth = (auth) => {
  return {
    type: SET_AUTH,
    auth,
  }
}

const setRegister = (user) => {
  return {
    type: REGISTER,
    user,
  }
}

// THUNK creators
// attemptLogin
export const me = () => {
  return async (dispatch) => {
    console.log('me');
    try {
      const token = window.localStorage.getItem(TOKEN);
      if(token) {
        const res = await axios.get('/auth/me', {
          headers: {
            authorization: token
          }
        })
        return dispatch(setAuth(res.data))
      }
    } catch(e) {
      console.log(e);
    }
  }
}

export const registered = (user) => {
  return async (dispatch) => {
    console.log(user.username);
    const wholeUser = user.username
    const res = await axios.post('/auth/register', wholeUser)
    const data = res.data
    dispatch(setRegister(data))
  }
}

// signIn
export const authenticate = (name, pass) => {
  return async (dispatch) => {
    try {
      // const username = name.username;
      // const password = name.password
      // console.log("TTTTTT", name);
      const res = await axios.post(`/auth/signin`, name)
      window.localStorage.setItem(TOKEN, res.data.token)
      dispatch(me())
    } catch(authError) {
      return dispatch(setAuth({error: authError}))
    }
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.pushState('/signin')
  return {
    type: SET_AUTH,
    auth: {},
  }
}

// REDUCER
export function authReducer(state = {}, action) {
  switch(action.type) {
    case SET_AUTH:
      return action.auth
    case REGISTER:
      return action.auth
    default:
      return state
  }
}


