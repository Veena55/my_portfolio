import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HorizontalScroll from '../components/HorizontalScroll'
import Education from '../components/Education'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

const Home = () => {
    return (
        <>
            <div className="h-screen bg-themeBgGardient p-5">
                <Navbar />
                <Header />
            </div>
            <div>
                <HorizontalScroll />
            </div>
            <div className="p-5">
                <AboutMe />
            </div>
            <div className="p-5">
                <Education />
            </div>
            <div className="p-5 pt-20">
                <Projects />
            </div>
        </>

    )
}

export default Home