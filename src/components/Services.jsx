import React from 'react'
import styled from 'styled-components';
import backImg from '../images/backgroundS.png'
import services1 from '../images/services1.png'
import services2 from '../images/services2.png'
import services3 from '../images/services3.png'
import services4 from '../images/services4.png'


const Wrapper = styled.div`
    background-image: url(${backImg}); /* The image used */
    height: auto;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: contain; /* Resize the background image to cover the entire container */
    display: flex;
    flex-direction: column;
    padding-top: 10vw;
`
const Container = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 1.6vw;
    margin: 2vw;
    height: 25vw;
    width: 25vw;
    h2 {
        font-weight: 900;
    }
    img {
        padding: 1vw;
        width: 70%;
    }
`
const Row = styled.div`
    display: flex;
    justify-content: center;
    
`
const RowS = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10vw 0;
    position: relative;
    
    h1 {
        font-size: 4rem;
        font-weight: 900;
        position: absolute;
        top: 7vw;
    }
    ul {
        list-style: none;
        width: 40vw;
        height: auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 30px;
        padding: 3vw;
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(81,218,207,1)0%, rgba(255,255,255,1)  100%);
        
        
        text-align: center;
        li {
            font-weight: 200;
            font-size: 2rem;
            line-height: 4vw;
            border-bottom: 1px solid #000;
            padding: 1vw;
        }
    }
    button {
        width: 17vw;
        height: 5vw;
        font-size: 2rem;
    }
    
`

const Services = () => {
    return (
        <Wrapper>
            <Row>
            <Container>
                <h2>custom design</h2>
                <img src={services1} alt=""/>
            </Container>
            <Container>
                <h2>personalised functionality</h2>
                <img src={services2} alt=""/>
            </Container>
            </Row>
            <Row>
            <Container>
                <h2>free hosting</h2>
                <img src={services3} alt=""/>
            </Container>
            <Container>
                <h2>why we don't use wordpress</h2>
                <img src={services4} alt=""/>
            </Container>
            </Row>
            <RowS>
                <h1>website maintenance</h1>
                <ul>
                    <li>regular updates</li>
                    <li>site backup</li>
                    <li>monthly traffic reports</li>
                    <li>SEO reports</li>
                    <button className="btn-empty">contact</button>
                </ul>
                
            </RowS>
        </Wrapper>
    )
}

export default Services
