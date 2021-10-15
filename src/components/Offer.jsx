import React from 'react'
import styled from 'styled-components';
import offer1 from '../images/offer1.png'
import offer2 from '../images/offer2.png'
import offerb from '../images/offerb.png'

const Wrapper = styled.div`
    background-image: url(${offerb}); /* The image used */
    height: auto;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: contain; /* Resize the background image to cover the entire container */
    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .offer-title {
        
        h2{
            font-size: 3vw;
            font-weight: 800;  
        }
        
    }
    
`
const Container = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    margin: 1vw 6vw 5vw 6vw;
    padding: 5vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 30px;
    p {
        font-size: 2vw;
        padding-bottom: 5vw;
    }
    h5 {
        position: absolute;
        bottom: 5vw;
        right: 5vw;
        font-size: 3vw;
        font-weight: 200;
        span {
            font-weight: 900;
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
`

const Offer = () => {
    return (
        <Wrapper>
            <div className="offer-title">
                <h2>pre-built themes with customisation</h2>
            </div>
            <Container>
                
                <div className="container-img">
                    <img src={offer1} alt="" />
                </div>
                <div className="container-info">
                    <p>Customisation of the theme of your choice can be a good solution for a start. Simply find what you like and let us do the rest.</p>
                    <a href="#services">
                        <button className="btn-empty">services</button>
                    </a>
                </div>
                <h5>from <span>250£</span></h5>
            </Container>
            <div className="offer-title">
                <h2>designed and built from scratch</h2>
            </div>
            <Container>
                <div className="container-img">
                    <img src={offer2} alt="" />
                </div>
                <div className="container-info">
                    <p>Customisation of the theme of your choice can be a good solution for a start. Simply find what you like and let us do the rest.</p>
                    <a href="#services">
                        <button className="btn-empty">services</button>
                    </a>
                </div>
                <h5>from <span>250£</span></h5>
            </Container>
        </Wrapper>
    )
}

export default Offer
