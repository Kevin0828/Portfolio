import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProfileSection from '../../PageSections/ProfileSection/ProfileSection';
import ProjectSection from '../../PageSections/ProjectSection/ProjectSection';

class HomePage extends React.Component
{
    render() {
        return (
            <div>
                <NavBar />
                <ProfileSection />

                <ProjectSection />

            </div>
        );
    }
}

export default HomePage;
