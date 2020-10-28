import React from 'react';
import './ProfileSection.css';
import ProfileLayout from '../../Components/ProfileLayout/ProfileLayout';

class ProfileSection extends React.Component 
{
    render() {
        return (
            <section id = "profile">
                <div className = "profile-wrapper">
                    <ProfileLayout />
                </div>
            </section>
        );
    }
}

export default ProfileSection;