import { Button } from '../ButtonElements'
import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './AboutElement'
import avatar from '../../images/avatar.png'



const AboutSection = () => {
    return (
        <>
            <AboutContainer >
                <AboutWrapper>
                    <AboutRow >
                        <Column1>
                            <TextWrapper>
                                <Heading >
                                    Nice To Meet You
                                </Heading>
                                <Subtitle >
                                    I'm a full stack web developer leveraging my extensive background in sales and management to provide unique perspectives on how end-users interact with websites and software platforms.
                                </Subtitle >
                                <Subtitle>
                                    I've recently earned a certificate in Full Stack Web Development from the University of Central Florida Coding Boot Camp.
                                </Subtitle>
                                <Subtitle >
                                    Im an innovative problem-solver that is passionate about developing apps with a focus on user friendly design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
                                </Subtitle>
                                <BtnWrap>
                                    <Button>Portfolio</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={avatar} />
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection