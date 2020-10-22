import React from 'react';
import './ProfileSection.css';
import ProfileLayout from '../../Components/ProfileLayout/ProfileLayout';
import ResumeLayout from '../../Components/ResumeLayout/ResumeLayout';

class ProfileSection extends React.Component 
{
    render() {
        return (
            <section id = "profile">
                <div className = "wrapper">

                    <ProfileLayout />
                    <ResumeLayout />
                    
                </div>
            </section>
        );
    }
}

export default ProfileSection;