import React from 'react';
import './ContactModal.css';
import { Modal } from 'react-bootstrap';
import ContactMe from '../../Components/ContactMe/ContactMe';

function ContactModal(props) {
    return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            CONTACT ME
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ContactMe />
        </Modal.Body>
      </Modal>
    );
  }
  
  

export default ContactModal;