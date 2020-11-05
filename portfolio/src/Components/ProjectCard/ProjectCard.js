import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.css';
import LikeButton from '../LikeButton/LikeButton.js';
import '../../BackEnd/API_FIREBASE/init-firebase';

var totalLikes = firebase.collection("Project-Likes").doc("TaeGGgOaVif2LnjmNrtD");


class ProjectCard extends React.Component {

    

    render() {

        totalLikes.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

        return (
            <div className="col-sm-6">
                <Card className="project-card-individual fade-in-fast">
                    <div className="image-holder-animation">

                        <figure className="project-card-logo">
                            <Card.Img variant="top" src={this.props.cardLogo} />
                        </figure>
                    </div>
                    <Card.Body>

                        <Card.Title>
                            {this.props.title}
                        </Card.Title>

                        <Card.Subtitle>
                            {this.props.subTitle}
                        </Card.Subtitle>

                        <hr />

                        <Card.Text className="project-card-text-description">
                            {this.props.text}
                        </Card.Text>


                        <Card.Text id="project-card-skills">
                            <span className="project-card-skills-box"> {this.props.skill_1} </span>
                            <span className="project-card-skills-box"> {this.props.skill_2} </span>
                        </Card.Text>


                        <Card.Link target="_blank" href={this.props.link_1}><img alt="" className="card-project-links" src={this.props.image_1} /></Card.Link>
                        <Card.Link target="_blank" href={this.props.link_2}><img alt="" className="card-project-links" src={this.props.image_2} /></Card.Link>
                        <Card.Link target="_blank" href={this.props.link_3}><img alt="" className="card-project-links" src={this.props.image_3} /></Card.Link>

                        <div className = "card-project-like">
                            <LikeButton />
                        </div>


                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectCard;