import React, { useState } from 'react'
import HeroImg from '../../images/money.jpg'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP,
        HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '.././ButtonElements'

const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <ImageBg src={HeroImg} alt="Stacked gold coins" />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Virtual Banking Made Easy
            </HeroH1>
            <HeroP>Sign up for a new account today and receive $250 in credit
            towards your next payment</HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                  Get Started  {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>

        </HeroContent>
    </HeroContainer>
  )
}

export default Hero