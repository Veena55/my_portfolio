import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HorizontalScroll from '../components/HorizontalScroll'

const Home = () => {
    return (
        <>
            <div className="h-screen bg-themeBgGardient pt-5">
                <Navbar />
                <Header />
            </div>
            <div>
                <HorizontalScroll />
            </div>
        </>

    )
}

export default Home