import React from 'react';
import './ContactModalButton.css';
import ContactModal from '../../Components/ContactModal/ContactModal';



function ContactModalButton() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <button className="modal-contact-me-open" onClick={() => setModalShow(true)}>
          CLICK HERE TO CONTACT ME!
        </button>
  
        <ContactModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default ContactModalButton;