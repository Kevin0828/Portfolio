import React from 'react';
import './ContactMe.css';
import { Button } from 'react-bootstrap';
import PHP_MAIL from '../../BackEnd/Contact/Contact.php';



class ContactMe extends React.Component {
    render() {
        return (
            <section className="contact-me-section" action={PHP_MAIL}>
                <form className ="contact-form">
                    <div className="contact-name">
                        <input className="contact-input" name="Name" placeholder="Enter Name" required/>
                    </div>
                    <div className="contact-name">
                        <input type = "email" className="contact-input" name="Email" placeholder="Enter Email" required/>
                    </div>
                    <div className="contact-name">
                        <textarea className="contact-input message-input" name="Message" placeholder="Your Message" minLength = "15" maxLength="500" required/>
                    </div>
                    <div className="contact-input-send">
                        <Button className="form-button" variant="outline-success" type="submit">Submit</Button>
                    </div>
                </form>
            </section>
        );
    }
}

export default ContactMe;