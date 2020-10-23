import React from 'react';
import './ProjectSection.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Card_1_image from '../../../src/Images/JPM.jpg';

const card_1 = {
    title: "J.P. Morgan Chase Hackathon Project",
    text: "Our elderly are having a hard time to communicate with this pandemic going on." 
    + " Most systems are way too complex for them to catch up. We developed a very" 
    + " simple to use web-app where anyone can easily navigate and enjoy.",
    src: Card_1_image
}

class ProjectSection extends React.Component {
    render() {
        return (
            <section id="projects">
                <div className="project-wrapper">

                    <div className="project-txt-wrap"><span className="project-txt">Projects</span></div>


                    <div className="container project-card-container">
                        <div className="row project card-row">
                                    <ProjectCard title = {card_1.title} text = {card_1.text} logo = {card_1.src}/>
                                    <ProjectCard />
                                    <ProjectCard />
                                    <ProjectCard />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSection;