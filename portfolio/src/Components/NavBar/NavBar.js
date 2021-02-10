import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
import ContactModal from '../../Components/ContactModal/ContactModal';
import Resume from '../../Documents/Kevin_Fontela_Resume.pdf';

const NavBar = () => 
{
        const openPDF = () => {
          const pdfWindow = window.open("Kevin_Fontela_Resume.pdf");
          const title     = "Kevin_Fontela_Resume.pdf";
          const URI       = "Kevin_Fontela_Resume.pdf";
          const html      = `
            <html>
              <head>
                <title>${title}</title>
              </head>
              <body>
                <embed width="100%" height="100%" src=${Resume} type="application/pdf">
              </body>
            </html>
          `;
      
          pdfWindow.document.write(html);
          pdfWindow.document.close();
          pdfWindow.history.pushState(null, "Kevin_Fontela_Resume.pdf", URI);
        };

    const [modalShow, setModalShow] = React.useState(false);
    
    return (
        <Navbar sticky="top" target="_blank"  className="nav-bar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >Welcome!</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
            
                <Nav className="mr-auto">
                    <Nav.Link onClick={openPDF} rel="noopener noreferrer">Resume</Nav.Link>
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
