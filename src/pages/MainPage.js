import React from 'react'
import styled from 'styled-components';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Offer from '../components/Offer';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';



const Wrapper = styled.div`
    
    width: 100%;
`

const MainPage = () => {
    return (
        <Wrapper>
            <Navbar/>
            <Hero/>
            <Services/>
            <Portfolio/>
            <Offer/>
            <About/>
            <ContactForm/>
            <Footer/>
        </Wrapper>
    )
}

export default MainPage
