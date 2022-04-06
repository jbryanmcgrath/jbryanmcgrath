import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import projects from './projects.json'
import { TitleContainer, Title, GithubIcon, LinkIcon } from './ProjectElements'







const ProjectCards = () => {
    return (
        <div id="projects">
            <Container >
                <TitleContainer >
                    <Title>Projects</Title>
                </TitleContainer>
                <Row xs={1} md={3} className="g-4">
                    {projects.map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={_.image} />
                                <Card.Body>
                                    <Card.Title>{_.name}</Card.Title>
                                    <Card.Text>
                                        {_.description}
                                    </Card.Text>
                                    <Card.Link href={_.GitHub}>
                                        <GithubIcon />
                                    </Card.Link>
                                    <Card.Link href={_.deployedURL}>
                                        <LinkIcon />
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProjectCards