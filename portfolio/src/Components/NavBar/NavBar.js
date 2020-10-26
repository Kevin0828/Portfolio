import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar target="_blank" className="nav-bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="mr-auto">
                    <Nav.Link  >Resume</Nav.Link>
                    <Nav.Link >Projects</Nav.Link>
                    <Nav.Link >Hire Me</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link target="_blank" href="https://www.linkedin.com/in/kevinfontela/" >LinkedIn</Nav.Link>
                    <Nav.Link eventKey={2} target="_blank" href="https://github.com/Kevin0828">
                        GitHub
      </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;