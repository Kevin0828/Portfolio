import React from 'react';
//import { Button } from 'react-bootstrap';
import './ViewResume.css';
import Resume from '../../Documents/Resume.pdf';


const ViewResume = () => {
    return (
        <div className= "button-container">
            <a className="resume-link" href={Resume} target="_blank"><button className="resume-btn">View Resume</button> </a>
        </div>
    );
}

export default ViewResume;