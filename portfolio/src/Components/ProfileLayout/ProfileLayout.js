import React from 'react';
import ProfileImage from '../../Images/Profile.jpg';
import './ProfileLayout.css';
import ViewResume from '../ViewResume/ViewResume'


const ProfileLayout = () =>
{
    return(
        <div className = "fade-in-fast">
            <img className = "profile-img" src = {ProfileImage}  alt = "Kevin Fontela's profile picture"/>
            <div><span className="profile-name">Kevin Fontela</span></div>
            <div><span className="profile-name description">Aspiring Software Engineer</span></div>
        </div>
    );
}

export default ProfileLayout;