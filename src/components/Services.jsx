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
    padding-top: 1vw;
    @media (max-width:768px){
        padding: 10vw 0vw;
    }
`
const Container = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fdfff5;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    padding: 1.6vw;
    margin: 2vw;
    width: 20vw;
    height: 20vw;
    h2 {
        font-weight: 400;
        font-size: 1.2rem;
        font-family: 'Courier Prime', monospace;
    }
    img {
        padding: 1vw;
        max-width:80%;
        max-height: 80%;
        object-fit: contain;
    }
    @media (max-width:768px){
        padding: 2vw;
        height: auto;
        font-size: 1rem;
        height: 70vw;
        width: 70vw;
        img {
            width: 60%;
        }
    }
`
const Row = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width:768px){
        padding: 0;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`
const RowS = styled.div`
    display: grid;
    grid-template-columns: 36vw 36vw;
    grid-template-rows: 1fr;
    justify-content: center;
    padding: 10vw;
    position: relative;
    height: auto;
    h1 {
        font-size: 2rem;
        font-weight: 900;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
    }
    .first-list {
        text-align: right;
        li {
            border-right: 2px solid #000;
            border-left: 1px solid transparent;
            transition: all 0.16s ease-in-out;
            &:hover {
                border-right: 2px solid transparent;
                border-left: 1px solid #FCCC00;
                background-color: rgba(255,255,255, .9);
            }
        }
    }
    .second-list {
        li {
            border-left: 1px solid #000;
            border-right: 1px solid transparent;
            transition: all 0.12s ease-in-out;
            &:hover {
                border-right: 1px solid #51DACF;
                border-left: 1px solid transparent;
                background-color: rgba(255,255,255, .9);
            }
        }
    }
    ul {
        list-style: none;
        width: 36vw;
        height: auto;
        border-radius: 30px;
        padding: 3vw;
        li {
            
            font-size: 1.8vw;
            line-height: 5vw;
            padding: 1vw;
            font-family: 'Courier Prime', monospace;
        }
    }
    button {
        width: 17vw;
        height: 4vw;
        font-size: 2vw;
    }
    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15vw 0;
        height: auto;
        position: relative;
        h1 {
            position: absolute;
            font-size: 7vw;
            top: 50%;
            left: 5vw;
        }
        ul {
            padding: 10vw 2vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 70vw;
            box-shadow: none;
            li {
                font-size: 5vw;
                font-weight: 500;
                border-bottom: none;
                line-height: 12vw;
            }
        }
        button {
        width: 50vw;
        height: 15vw;
        font-size: 5.5vw;
    }
    }
    
`

const Services = () => {
    return (
        <Wrapper id="services">
            <div>
                <Row>
                    <Container>
                        <h2>we offer custom designs</h2>
                        <img src={services1} alt="" />
                    </Container>
                    <Container>
                        <h2>personalised functionality</h2>
                        <img src={services2} alt="" />
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <h2>advice on free hosting platforms</h2>
                        <img src={services3} alt="" />
                    </Container>
                    <Container>
                        <h2>no monthly payments no wordpress</h2>
                        <img src={services4} alt="" />
                    </Container>
                </Row>
            </div>
            <RowS>
                <h1>website maintenance</h1>
                <ul className="first-list">
                    <li>regular updates</li>
                    <li>site backup</li>
                    <li>monthly traffic reports</li>
                    <li>SEO reports</li> <br />
                    <a href="#contact">
                        <button className="btn-background">contact</button>
                    </a>
                </ul>
                <ul className="second-list">
                    <li>quick turnaround</li>
                    <li>files stored on GitHub</li>
                    <li>site monitoring</li>
                    <li>easy contact</li> <br />
                    <a href="#work">
                        <button className="btn-empty">portfolio</button>
                    </a>
                </ul>
            </RowS>
        </Wrapper>
    )
}

export default Services
