
import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    padding: 2vw;
    height: 12vh;
    position: relative;
    h1 {
        font-size: 1vw;
        color: #000;
        font-weight: 500;
    }
    img {
        position: absolute;
        left: 2vw;
        bottom: 2vw;
        width: 10%;
    }
    @media (max-width:768px){
        img {
            width: 20vw;
        }
        h1 {
            font-size: 0.7rem;
            text-align: center;
        }
    }
`
const Footer = () => {
    return (
        <Wrapper>
            <img src={logo} alt="" />
            <h1>&copy; all rights reserved 2021</h1>
        </Wrapper>
    )
}

export default Footer
