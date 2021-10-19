import React from 'react'
import styled from 'styled-components';
import hero from '../images/hero.png'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(81,218,207,1) 100%);
    padding: 3vw 5vw 5vw;
    /* background: -moz-radial-gradient(circle, rgba(81,218,207,1) 0%, rgba(248,218,91,1) 53%, rgba(245,223,129,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(81,218,207,1) 0%, rgba(248,218,91,1) 53%, rgba(245,223,129,1) 100%);
    background: radial-gradient(circle, rgba(81,218,207,1) 0%, rgba(248,218,91,1) 53%, rgba(245,223,129,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#51dacf",endColorstr="#f5df81",GradientType=1); */
    @media (max-width:768px){
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding: 5vw 2vw;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:0.3vw;
    width: 60vw;
    padding-left: 10vw;
    h1 {
        font-size: 4vw;
        font-weight: 200;
    }
    p {
        padding-bottom: 5vw;
        font-family: 'Courier Prime', monospace;
    }
    .buttons {
        display: flex;
        gap:2vw;
    }
    @media (max-width:768px){
        padding: 5vw;
        width: 100%;
        h1 {
            font-size: 2.2rem;
            font-weight: 800;
            padding: 4vw 0;
        }
        p {
            font-size: 0.9rem;
        }
    }
`

const Right = styled.div`
    width: 50vw;
    img {
        width: 100%;
    }
    @media (max-width:768px){
        width: 100%;
    
    }
`

const Hero = () => {
    return (
        <Wrapper>
            <Left>
                <h1>web design and development</h1>
                <p>looking for someone to build and maintain your website ?</p>
                <div className="buttons">
                    <a href="#contact">
                        <button className="btn-background">contact</button>
                    </a>
                    <a href="#services">
                        <button className="btn-empty">services</button>
                    </a>

                </div>
            </Left>
            <Right>
                <img src={hero} alt="" />
            </Right>


        </Wrapper>
    )
}

export default Hero
