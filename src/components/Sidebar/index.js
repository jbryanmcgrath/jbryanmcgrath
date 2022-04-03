import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLinkR, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='portfolio' onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact Me
                    </SidebarLink>
                    <SidebarLinkR to='/resume' onClick={toggle}>
                        Resume
                    </SidebarLinkR>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar