import React from "react";
import Slider from "react-slick";
import project1desk from '../images/Untitled.png'
import styled from 'styled-components';


const Wrapper = styled.div`
    padding-bottom: 7vw;
    overflow: hidden;
   `

const SliderItem = styled.div`
    display: flex !important;
    justify-content: space-between;
    height: auto;
    
    .slider-img { 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        img {
            width: 70%;
           }
        &-two {
        }
    }
    .slider-info {
        padding: 5vw 5vw 5vw 0;
        width: 50%;
        h1 {
            font-size: 3vw;
            font-weight: 800;
        }
        p {
            font-size: 1.3vw;
            line-height: 1.8vw;
            padding: 2vw 0;
        }
    }
`


const Portfolio = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <Wrapper>
            <Slider {...settings}>
                <SliderItem>
                    <div className="slider-img">
                        <img className="slider-img-one" src={project1desk} alt="" />
                        
                    </div>
                    <div className="slider-info">
                        <h1>na ha ku</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="#contact">
                            <button className="btn-empty">contact</button>
                        </a>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div className="slider-img">
                        <img className="slider-img-one" src={project1desk} alt="" />
                        
                    </div>
                    <div className="slider-info">
                        <h1>na ha ku</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="#contact">
                            <button className="btn-empty">contact</button>
                        </a>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div className="slider-img">
                        <img className="slider-img-one" src={project1desk} alt="" />
                        
                    </div>
                    <div className="slider-info">
                        <h1>na ha ku</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="#contact">
                            <button className="btn-empty">contact</button>
                        </a>
                    </div>
                </SliderItem>
                <SliderItem>
                    <div className="slider-img">
                        <img className="slider-img-one" src={project1desk} alt="" />
                        
                    </div>
                    <div className="slider-info">
                        <h1>na ha ku</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="#contact">
                            <button className="btn-empty">contact</button>
                        </a>
                    </div>
                </SliderItem>

            </Slider>
        </Wrapper>
    )
}

export default Portfolio
