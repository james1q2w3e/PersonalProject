import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Nav, NavLink, Navbar, NavDropdown, Container } from "react-bootstrap"; // not efficient
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



const Navigation = () => {
  return (
        <Navbar bg="dark" expand="lg" variant="dark" >
          <Container>
            <Navbar.Brand as={Link} to='/'>Navigation</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="me-auto" variant="tabs" defaultActiveKey="/">

              <Nav.Link eventKey='/' as={Link} to='/' className="NavLink" >Home</Nav.Link>
              <Nav.Link eventKey='/link2' as={Link} to='/link2' className="NavLink" >Link2</Nav.Link>
              <Nav.Link eventKey='/link3' as={Link} to='/link3' className="NavLink" >Link3</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item eventKey='/formyforms' as={Link} to='/formyforms' >Action</NavDropdown.Item>
                <NavDropdown.Item eventKey='/stuffystuff' as={Link} to='/stuffystuff' >Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                <NavDropdown.Item eventKey='/notanimeprofiles' as={Link} to='/notanimeprofiles'>notanimeprofiles</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/link67' className="NavLink" >link67</Nav.Link>
              <Nav.Link as={Link} to='/link4' className="NavLink" >link4</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  )
}

export default connect()(Navigation);