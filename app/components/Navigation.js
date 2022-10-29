import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Nav, NavLink, Navbar, NavDropdown, Container } from "react-bootstrap"; // not efficient
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



const Navigation = () => {
  return (
        <Navbar bg="light" expand="lg" >
          <Container>
            <Navbar.Brand as={Link} to='/'>Navigation</Navbar.Brand>
            <Nav.Link as={Link} to='/link1' className="NavLink" >Link1</Nav.Link>
            <Nav.Link as={Link} to='/link2' className="NavLink" >Link2</Nav.Link>
            <Nav.Link as={Link} to='/link3' className="NavLink" >Link3</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/formyforms' >Action</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/stuffystuff' >Another action</NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/notanimeprofiles'>Something</NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar>
  )
}

export default Navigation;