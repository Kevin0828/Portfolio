import React from 'react';
import './ProjectSection.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import CardDataFile from '../../Components/CardData/CardData.json';
import TotalLikes from '../../BackEnd/GetLikesDB/GetLikesDB.js';

const Card_Data_1 = CardDataFile.Card_1;
const Card_Data_2 = CardDataFile.Card_2;
const Card_Data_3 = CardDataFile.Card_3;
const totalLikes = TotalLikes;


function ProjectSection() {
{
        

        return (
            <section id="projects">
                <div className="project-wrapper">

                    <div className="project-txt-wrap"><span className="project-txt">Projects</span></div>


                    <div className="container project-card-container">
                        <div className="row project-card-row">
                            {console.log(totalLikes)}
                                    {Card_Data_1.map((data) => (<ProjectCard key = {data}{...data} likes = {5} />))}
                                    {Card_Data_2.map((data) => (<ProjectCard key = {data}{...data} likes = {4}/>))}
                                    {Card_Data_3.map((data) => (<ProjectCard key = {data}{...data} likes = {3}/>))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSection;