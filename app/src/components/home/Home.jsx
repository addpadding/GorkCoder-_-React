import React from 'react'

import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import H_About from './H_About'
import Testimonal_ from './testimonal/Testimonal_'
import H_Blog from './H_Blog'
import H_price from './H_price'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutCard />
            <H_About />
            <Testimonal_ />
            <H_Blog />
            <H_price />
        </>
    )
}

export default Home