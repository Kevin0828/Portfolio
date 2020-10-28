import React from 'react';
import './ContactSection.css';
import ContactModalButton from '../../Components/ContactModalButton/ContactModalButton';


class ContactSection extends React.Component {
    render() {
        return (
            <section id="contact">
                <div id="contact-wrapper">
                    <div className = "modal-button">
                        <ContactModalButton />
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;