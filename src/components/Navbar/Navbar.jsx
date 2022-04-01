import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">J. Bryan McGrath</Navbar.Brand>
                    <Nav className="nav-options">
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#portfolio"></Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar