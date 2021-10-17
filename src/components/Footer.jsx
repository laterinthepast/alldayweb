import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    margin: 10vw 5vw;
    h1 {
        font-size: 1rem;
    }
    img {
        width: 10%;
    }
    background-color: #fff;
`


const Footer = () => {
    return (
        <Wrapper>
            <img src={logo} alt=""/>
            <h1>all rights reserved 2021</h1>
        </Wrapper>
    )
}

export default Footer
