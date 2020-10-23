import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css';


class ProjectCard extends React.Component {
    render() {
        return (
            <div className="col-sm-6">
                <Card className="project-card-individual">
                    <Card.Img  variant="top" src="https://www.imgacademy.com/sites/default/files/airports-new.jpg" />
                    <Card.Body>

                        <Card.Title>{this.props.title}</Card.Title>

                        <Card.Text>
                            {this.props.text}
                        </Card.Text>

                        <Button variant="success">See more...</Button>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectCard;