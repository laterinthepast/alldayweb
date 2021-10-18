
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
    @media (max-width:768px){
        img {
            width: 30%;
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
            <img src={logo} alt=""/>
            
            <h1>&copy; all rights reserved 2021 alldayweb</h1>
        </Wrapper>
    )
}

export default Footer
