import React from 'react';
import './ProjectSection.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import CardDataFile from '../../Components/CardData/CardData.json';

const Card_Data_1 = CardDataFile.Card_1;


class ProjectSection extends React.Component {
    render() {
        return (
            <section id="projects">
                <div className="project-wrapper">

                    <div className="project-txt-wrap"><span className="project-txt">Projects</span></div>


                    <div className="container project-card-container">
                        <div className="row project card-row">
                                    {Card_Data_1.map((data) => (<ProjectCard {...data} />))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSection;