import React from 'react';
import './ContactMe.css';
import { Button } from 'react-bootstrap';



class ContactMe extends React.Component {
    render() {
        return (
            <section className="contact-me-section">
                <form className ="contact-form">
                    <div className="contact-name">
                        <input className="contact-input" name="name" placeholder="Enter Name" required/>
                    </div>
                    <div className="contact-name">
                        <input type = "email" className="contact-input" name="nmail" placeholder="Enter Email" required/>
                    </div>
                    <div className="contact-name">
                        <textarea className="contact-input message-input" name="message" placeholder="Your Message" minLength = "15" maxLength="500" required/>
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