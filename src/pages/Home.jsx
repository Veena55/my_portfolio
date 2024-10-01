import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HorizontalScroll from '../components/HorizontalScroll'
import Education from '../components/Education'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className=" bg-themeBgGardient p-5">
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
            <div className="pt-20">
                <Projects />
            </div>
            <div className="pt-0 bg-themeLightBg">
                <ContactMe />
            </div>
            <div className="pt-0">
                <Footer />
            </div>
        </>

    )
}

export default Home