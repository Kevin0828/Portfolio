import React from 'react';
import ProfileImage from '../../Images/Profile.jpg';
import './ProfileLayout.css';
import Resume from '../../Documents/Resume.pdf';
import './ViewResume.css';

const ProfileLayout = () => {
    return (
        <div className="fade-in-fast">
            <div className="profile-layOut">
                <img className="profile-img" src={ProfileImage} alt="Kevin Fontela's profile" />
                <div className="profile-name-div"><h1 className="profile-name">Kevin Fontela</h1></div>
                <div className="profile-name-div"><h3 className="profile-name description">Aspiring Software Engineer</h3></div>
                
                <div className="button-container">
                    <a className="resume-link" href={Resume} target="_blank" rel="noopener noreferrer"><button className="resume-btn">View Resume</button> </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;