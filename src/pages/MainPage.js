import React from 'react'
import styled from 'styled-components';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Offer from '../components/Offer';
import Portfolio from '../components/Portfolio';
import ScrollButton from '../components/ScrollButton';

import Services from '../components/Services';



const Wrapper = styled.div`
    
`

const MainPage = () => {

    

    return (
        <Wrapper>
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Offer />
            <Services />
            <Contact />
            <Footer />
            <ScrollButton/>
        </Wrapper>
    )
}

export default MainPage
