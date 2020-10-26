import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.css';


class ProjectCard extends React.Component {
    render() {
        return (
            <div className="col-sm-6">
                <Card className="project-card-individual fade-in-fast">
                    <div className = "image-holder-animation">
                        <figure>
                            <Card.Img variant="top" src={this.props.cardLogo} />
                        </figure>
                    </div>
                    <Card.Body>

                        <Card.Title>{this.props.title}</Card.Title>

                        <Card.Subtitle>
                            {this.props.subTitle}
                        </Card.Subtitle>

                        <hr></hr>

                        <Card.Text>
                            {this.props.text}
                        </Card.Text>

                        <Card.Text>
                            {this.props.skill_1}
                            {this.props.skill_2}
                            {this.props.skill_3}
                        </Card.Text>

                        


                        <div className="card-links">
                            <a target="_blank" href={this.props.link_1}><img alt="" className="card-project-links" src={this.props.image_1} /></a>
                            <a href={this.props.link_2}><img alt="" className="card-project-links" src={this.props.image_2} /></a>
                            <a href={this.props.link_3}><img alt="" className="card-project-links" src={this.props.image_3} /></a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectCard;