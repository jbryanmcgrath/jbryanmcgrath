import React, { useState } from 'react'
import AboutSection from '../components/About'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import ProjectCards from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Contact from '../components/ContactMe'



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <ProjectCards />
            <Contact />

        </>
    )
}

export default Home