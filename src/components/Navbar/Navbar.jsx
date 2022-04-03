import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="#">J. Bryan McGrath</Navbar.Brand>
                    <Nav className="nav-options">
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation