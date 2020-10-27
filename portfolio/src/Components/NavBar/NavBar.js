import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import ContactModal from '../../Components/ContactModal/ContactModal';
import Resume from '../../Documents/Resume.pdf';


const NavBar = () => 
{
    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <Navbar sticky="top" target="_blank"  className="nav-bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >Welcome!</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
            
                <Nav className="mr-auto">
                    <Nav.Link target="_blank" href={Resume} rel="noopener noreferrer">Resume</Nav.Link>
                    <Nav.Link onClick={() => setModalShow(true)} >Contact Me</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link target="_blank" href="https://www.linkedin.com/in/kevinfontela/" rel="noopener noreferrer">LinkedIn</Nav.Link>
                    <Nav.Link eventKey={2} target="_blank" href="https://github.com/Kevin0828" >GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>


            <ContactModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

        </Navbar>

        
    );
}

export default NavBar;
