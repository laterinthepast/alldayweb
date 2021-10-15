import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    padding: 10vw;
    background: rgb(81,218,207);
    background: linear-gradient(0deg, rgba(81,218,207,1) 0%, rgba(255,255,255,1) 100%);
`



const About = () => {
    return (
        <Wrapper>
            <img src={logo} alt="" />
            <h3>We are a newly established web development agency based in UK. Simple and specious designs and quick builds this is what we do.
                Contact us for any queries and do not hesitate to ask questions.
                All our quotes are free so there is no harm in getting information. </h3>
        </Wrapper>
    )
}

export default About
