import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinkR } from './NavbarElements'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ toggle }) => {


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='hero-section'>
                        J. Bryan McGrath
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="projects">Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinkR to="/resume">Resume</NavLinkR>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar