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
                            <Card.Img variant="top" src={this.props.logo} />
                        </figure>
                    </div>
                    <Card.Body>

                        <Card.Title>{this.props.title}</Card.Title>

                        <Card.Text>
                            {this.props.text}
                        </Card.Text>

                        <div className="card-links">
                            <a href={this.props.linkedIn_link}><img className="card-project-links" src={this.props.linkedIn} /></a>
                            <a href={this.props.viewWeb_link}><img className="card-project-links" src={this.props.viewWeb} /></a>
                            <a href={this.props.video_link}><img className="card-project-links" src={this.props.video} /></a>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectCard;