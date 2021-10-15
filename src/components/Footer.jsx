import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    padding-top: 10vw;
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
