import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./Home";
// import { Button } from '../../public/style';
import { Nav, NavLink, Navbar, NavDropdown, Container } from "react-bootstrap";
import Navigation from "./Navigation";


const Routes = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <main>
          <h1 className="" >Welcome to this page! (Routes.js)</h1>
          {/* <Switch>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Switch> */}
        </main>
      </div>
    </Router>
  )
}

export default Routes;