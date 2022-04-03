import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarLinkR, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='portfolio'>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to='contact'>
                        Contact Me
                    </SidebarLink>
                    <SidebarLinkR to='/resume'>
                        Resume
                    </SidebarLinkR>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar