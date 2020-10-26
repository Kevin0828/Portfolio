import React from 'react';
import './ProfileSection.css';
import ProfileLayout from '../../Components/ProfileLayout/ProfileLayout';
import ResumeLayout from '../../Components/ResumeLayout/ResumeLayout';
import DownArrow from '../../Components/DownArrow/DownArrow.js';

class ProfileSection extends React.Component 
{
    render() {
        return (
            <section id = "profile">
                <div className = "profile-wrapper">

                    <ProfileLayout />
                    <ResumeLayout />
                    <DownArrow />
                </div>
            </section>
        );
    }
}

export default ProfileSection;