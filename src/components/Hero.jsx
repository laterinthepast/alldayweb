import React from 'react'
import styled from 'styled-components';
import hero from '../images/hero.png'

const Wrapper = styled.div`
    height: auto;
    display: flex;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(81,218,207,1) 100%);
    padding: 1vw;
    /* background: -moz-radial-gradient(circle, rgba(81,218,207,1) 0%, rgba(248,218,91,1) 53%, rgba(245,223,129,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(81,218,207,1) 0%, rgba(248,218,91,1) 53%, rgba(245,223,129,1) 100%);
    background: radial-gradient(circle, rgba(81,218,207,1) 0%, rgba(248,218,91,1) 53%, rgba(245,223,129,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#51dacf",endColorstr="#f5df81",GradientType=1); */
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    gap:0.3vw;
    width: 50vw;
    padding-left: 10vw;
    h1 {
        font-size: 4vw;
        font-weight: 600;
    }
    p {
        padding-bottom: 5vw;
    }
    .buttons {
        display: flex;
        gap:2vw;
    }
`

const Right = styled.div`
    width: 50vw;
    img {
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
