
import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vw;
    padding: 5vw;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(26,50,121,1) 100%);
    
    h1 {
        font-size: 1rem;
        color: #fff;
        font-weight: 500;
    }
    img {
        width: 10%;
    }
    
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
