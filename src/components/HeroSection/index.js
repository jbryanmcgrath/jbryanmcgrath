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
                        I'm a web developer with a strong desire to learn and grow in this field.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='about'
                            onHover={onHover}
                            primary='true'
                            dark='true'>
                            Learn More
                            {onHover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection