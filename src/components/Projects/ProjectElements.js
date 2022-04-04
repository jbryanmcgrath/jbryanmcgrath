import styled from 'styled-components'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FiLink2 } from "@react-icons/all-files/fi/FiLink2"

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 35px;

`

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height:1.1;
    font-weight: 600;
    color: #000;
    border-bottom: 20px black;
    
    @media screen and (max-width: 480px){
        font-size: 32px };
`

export const GithubIcon = styled(FaGithub)`
    height:40px;
    width: 40px;
`

export const LinkIcon = styled(FiLink2)`
    height:40px;
    width:40px;
`