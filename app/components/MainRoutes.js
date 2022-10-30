import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home";
import Link2 from "./Link2";
import { Nav, NavLink, Navbar, NavDropdown, Container } from "react-bootstrap";
import Navigation from "./Navigation";


const MainRoutes = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <main>
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/link2" element={<Link2/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default MainRoutes;