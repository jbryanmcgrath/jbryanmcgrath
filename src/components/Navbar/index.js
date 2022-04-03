import React from 'react'
import { FaBars } from 'react-icons/fa'
import { NavbarContainer, Nav, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinkR } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        J. Bryan McGrath
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="portfolio">Portfolio
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