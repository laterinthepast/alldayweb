import React from 'react'
import styled from 'styled-components';
import About from '../components/About';
import Contact from '../components/Contact';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Offer from '../components/Offer';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';



const Wrapper = styled.div`
    
`

const MainPage = () => {
    return (
        <Wrapper>
            <Navbar/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Services/>
            
            <Offer/>
            
            <Contact/>
            <Footer/>
        </Wrapper>
    )
}

export default MainPage
