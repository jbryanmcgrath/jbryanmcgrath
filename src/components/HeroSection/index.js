import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer id="hero-section">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Hi. My name is Bryan.</HeroH1>
                    <HeroP>
                        I'm a web developer with a strong interest in blockchain technology and Web 3.0.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='about'
                            onHover={hover}
                            primary='true'
                            dark='true'>
                            Learn More
                            {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection