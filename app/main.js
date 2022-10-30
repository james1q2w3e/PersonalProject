import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import MainRoutes from './components/MainRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../public/App.css' // maybe load our app.css?

// import store from './store'
// import Routes from './components/Routes'

ReactDOM.render(
  <Provider store={store} >
    <MainRoutes />
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);