import React from 'react';
import './ProjectSection.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';


class ProjectSection extends React.Component {
    render() {
        return (
            <section id="projects">
                <div className="wrapper">

                    <div><span className="project-txt">Projects</span></div>


                    <div class="card-deck">
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>


                </div>
            </section>
        );
    }
}

export default ProjectSection;