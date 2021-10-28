import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import offer1 from '../images/offer1.png'
import offer2 from '../images/offer2.png'
import offerb from '../images/offerb.png'

const Wrapper = styled.div`
    background-image: url(${offerb}); /* The image used */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: contain; /* Resize the background image to cover the entire container */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10vw;
    gap: 10vw;
    .container-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
    }
    .offer-title {
        h2{
            font-size: 3vw;
            font-weight: 400; 
            text-align: center;
        }  
    }
    @media (max-width:768px){
        padding: 10vw 0.2vw;
        gap: 20vw;
        .offer-title {
            padding: 20vw 5vw 5vw 5vw;
            h2 {
                font-size: 2rem;
                color: #000;
                background: rgba(0,0,0, .1);
            }
        }
    }
`
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
    position: relative;
    margin: 1vw 2vw 1vw 2vw;
    padding: 5vw 3vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;
    background-color: #fdfff5;
    p {
        font-size: 1.5vw;
        padding-bottom: 5vw;
        text-align: left;
    }
    h5 {
        position: absolute;
        bottom: 1vw;
        right: 1vw;
        font-size: 2.5vw;
        font-weight: 200;
        span {
            font-weight: 800;
        }
    }
    button {
        width: 15vw; 
        height: 4vw;
    }
    .container-img {
        width: 60%;
        img {
           width: 100%; 
        }
    }
    .container-info {
        width: 40%;
    }
    @media (max-width:768px){
        box-shadow: none;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 5vw;
        border-radius:10px;
    h2 {
        font-size: 5vw;
    }
    p {
        font-size: 5vw;
        padding-bottom: 2vw 0;
    }
    h5 {
        position: static;
        font-size: 2rem;
        font-weight: 200;
        span {
            font-weight: 900;
        }
    }
    button {
        margin-top: 8vw;
        width: 60vw;
        height: 14vw;
        padding:0;
        font-size: 4.5vw;
    }
    .container-img {
        width: 100%;
        img {
           width: 100%;
        }
        
    }
    .container-info {
        padding: 5vw 0;
        width: 100%;
    }
    }
`
const Offer = () => {
    return (
        <Wrapper >
            <div className="container-wrapper" >
                <div className="offer-title" >
                    <h2 id="offer">pre-built themes with customisation</h2>
                </div>
                <Container>
                    <div className="container-img" >
                        <img src={offer1} alt="" />
                    </div>
                    <div className="container-info" >
                        <p>We let you choose a theme, free or premium (whichever you like) from <a href="https://themewagon.com/theme-category/landing-website/">themewagon</a> and we do the rest.
                            We work together on photos/sections/paragraphs etc. Updating existing websites with fresh new mobile friendly design.
                        </p>
                        <Link to="/themes">
                            <button className="btn-empty">choose your theme</button>
                        </Link>
                    </div>
                    <h5>from <span>250£</span></h5>
                </Container>
            </div>
            <div className="container-wrapper">
                <div className="offer-title">
                    <h2>designed and built from scratch</h2>
                </div>
                <Container>
                    <div className="container-img">
                        <img src={offer2} alt="" />
                    </div>
                    <div className="container-info">
                        <p>We design and build your website from scratch. Allows for great level of personalisation of the web. All our quotes are free so do not hesitate to contact us with any possible query.</p>
                        <a href="#contact">
                            <button className="btn-empty">contact</button>
                        </a>
                    </div>
                    <h5>from <span>500£</span></h5>
                </Container>
            </div>
        </Wrapper>
    )
}
export default Offer
