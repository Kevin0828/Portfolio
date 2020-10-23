import React from 'react';
import './ProjectSection.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';


class ProjectSection extends React.Component {
    render() {
        return (
            <section id="projects">
                <div className="project-wrapper">

                    <div className="project-txt-wrap"><span className="project-txt">Projects</span></div>


                    <div className="container">
                        <div className="row">
                            
                                    <ProjectCard />
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