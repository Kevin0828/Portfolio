import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css';


class ProjectCard extends React.Component {
    render() {
        return (

            <div class="w-100 d-4 d-sm-4 d-md-4">
                <Card className="card mb-4" >
                    <Card.Img variant="top" src="https://www.imgacademy.com/sites/default/files/airports-new.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectCard;