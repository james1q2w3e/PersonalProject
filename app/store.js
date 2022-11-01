import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios'
import appReducer from './redux'; // my reducer

// let middleware = [
//   // `withExtraArgument` gives us access to axios in our async action creators!
//   // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
//   thunkMiddleware.withExtraArgument({ axios }),
// ]

// if (process.browser) {
//   // We'd like the redux logger to only log messages when it's running in the
//   // browser, and not when we run the tests from within Mocha.
//   middleware = [...middleware, createLogger({ collapsed: true })]
// }



// const TOKEN = 'token';

// // ACTION types
// const SET_AUTH = 'SET_AUTH';

// // ACTION creators
// const setAuth = (auth) => {
//   return {
//     type: SET_AUTH,
//     auth,
//   }
// }

// // THUNK creators
// // attemptLogin
// export const me = () => {
//   return async (dispatch) => {
//     try {
//       const token = window.localStorage.getItem(TOKEN);
//       if(token) {
//         const res = await axios.get('/auth/me', {
//           headers: {
//             authorization: token
//           }
//         })
//         return dispatch(setAuth(res.data))
//       }
//     } catch(e) {
//       console.log(e);
//     }
//   }
// }

// // signIn
// export const authenticate = (username, password, method) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.post(`/auth/${method}`, {username, password})
//       window.localStorage.setItem(TOKEN, res.data.token)
//       dispatch(me())
//     } catch(authError) {
//       return dispatch(setAuth({error: authError}))
//     }
//   }
// }

// export const logout = () => {
//   window.localStorage.removeItem(TOKEN)
//   history.pushState('/login')
//   return {
//     type: SET_AUTH,
//     auth: {},
//   }
// }

// // REDUCER
// export function authReducer(state = {}, action) {
//   switch(action.type) {
//     case SET_AUTH:
//       return action.auth
//     default:
//       return state
//   }
// }





const store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;