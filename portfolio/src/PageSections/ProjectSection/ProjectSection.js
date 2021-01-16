import React, { userContext, useEffect, useState } from 'react';
import './ProjectSection.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import firestore from '../../BackEnd/GetLikesDB/init-firebase.js';
//import firestore from '../../BackEnd/API_FIREBASE/init-firebase.js';

class ProjectSection extends React.Component {

    state = {
        cardData: null,
        cardData_ID: null
    }

    componentDidMount() {
        firestore.collection('Card_Data')
            .get()
            .then(snapshot => {
                const cardData = []

                snapshot.forEach(doc => {
                    const data = doc.data()
                    
                    cardData.push(data)
                })

                this.setState({ 
                    cardData: cardData,
                })
                console.log(snapshot)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <section id="projects">
                <div className="project-wrapper">

                    <div className="project-txt-wrap"><span className="project-txt">Projects</span></div>


                    <div className="container project-card-container">
                        <div className="row project-card-row">

                            {
                                this.state.cardData &&
                                this.state.cardData.map(cardData => {
                                    return (
                                        <ProjectCard key={cardData}{...cardData}  />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSection;