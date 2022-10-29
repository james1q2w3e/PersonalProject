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

const store = createStore(
  appReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;