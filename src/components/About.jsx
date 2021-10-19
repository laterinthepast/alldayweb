import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    padding: 10vw 18vw;
    
    h3 {
        font-size: 1.2vw;
        line-height: 2.5vw;
    }
    img {
        width: 20vw;
    }
    @media (max-width:768px){
        flex-direction: column;
        padding: 25vw 5vw;
    }
`



const About = () => {
    return (
        <Wrapper id="about">
            <img src={logo} alt="" />
            <h3>We are a newly established web development agency based in UK. Simple and specious designs and quick builds this is what we do.
                Contact us for any queries and do not hesitate to ask questions.
                All our quotes are free so there is no harm in getting information. </h3>
        </Wrapper>
    )
}

export default About
