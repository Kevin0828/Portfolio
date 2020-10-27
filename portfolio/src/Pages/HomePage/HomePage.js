import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ProfileSection from '../../PageSections/ProfileSection/ProfileSection';
import ProjectSection from '../../PageSections/ProjectSection/ProjectSection';
import ContactSection from '../../PageSections/ContactSection/ContactSection';
import FooterSection from '../../PageSections/FooterSection/FooterSection';

class HomePage extends React.Component
{
    render() {
        return (
            <div>
                <NavBar />
                <ProfileSection />
                <ProjectSection />
                <ContactSection />
                <FooterSection />
            </div>
        );
    }
}

export default HomePage;
