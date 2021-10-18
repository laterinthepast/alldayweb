import React from "react";
import Slider from "react-slick";
import project1desk from '../images/nahaku.png'
import project2desk from '../images/meller.png'
import project3desk from '../images/quartz.png'
import project4desk from '../images/crypto.png'
import styled from 'styled-components';


const Wrapper = styled.div`
    padding-bottom: 7vw;
    overflow: hidden;
    @media (max-width:768px){
        
    }
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
            font-size: 3rem;
            font-weight: 800;
        }
        p {
            font-size: 1.3rem;
            line-height: 1.8vw;
            padding: 2vw 0;
        }
    }
    @media (max-width:768px){
        flex-direction: column;
        width: 100%;
        
        padding: 5vw;
        .slider-img {
            width: 100%;
            img {
                width:100%;
            }
        }
        .slider-info {
            padding: 5vw;
            width: 100%;
            h1 {
                font-size: 2rem;
            }
            p {
                line-height: 1.2rem;
                padding-bottom: 9vw;
            }
            button {
                width: 40vw;
                height: 12vw;
            }
        }
    }
`

const SliderItems = [
    {
        id: 1,
        img: project1desk,
        title: "na ha ku",
        desc: "Design, build and management of the website. Future development will involve converting it into e-commerce platform with its own shop for all the arts and crafts. Website built with React and styled components. Work in progress...",
        href: "https://nahakutestv2.netlify.app/",
    },
    {
        id: 2,
        img: project2desk,
        title: "mellerdramatic",
        desc: "One of the first projects built with React. Design, build and management of the website (currently waiting for client update). Website will be updated with new designs and tattoo photos. Future development may involve adding a shop for selling Bry's artwork. Website built with React and Sass.",
        href: "https://mellerdramatic.netlify.app/",
    },
    {
        id: 3,
        img: project3desk,
        title: "quartz scientific",
        desc: "Simple landing website for a local business. Design, build and management. Currently awaiting client update. Work in progress",
        href: "https://quartz-scientific.netlify.app/",
    },
    {
        id: 4,
        img: project4desk,
        title: "cryptofolio",
        desc: "Cryptofolio is my latest project and not yet done. Cryptocurrencies wallet with charts and all the necesarry info about your fauvorites coins. Will be built on React, styled components and Node.js for backend. Work in progress - possible finish by the end of 2021.",
        href: "https://github.com/laterinthepast/cryptofolio",
    }
]

const Portfolio = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Wrapper id="work">
            <Slider {...settings}>
                {SliderItems.map(({ img, title, desc, href,id }) => (
                    <SliderItem className="nav-item" key={id} >
                        <div className="slider-img">
                            <img className="slider-img-one" src={img} alt=""/>
                        </div>
                        <div className="slider-info">
                        <h1>{title}</h1>
                        <p>{desc}</p>
                        <a href={href}>
                            <button className="btn-empty">visit site</button>
                        </a>
                    </div>
                    </SliderItem>
                ))}

                {/* <SliderItem>
                    <div className="slider-img">
                        <img className="slider-img-one" src={img} alt="" />
                    </div>
                    <div className="slider-info">
                        <h1>na ha ku</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="#contact">
                            <button className="btn-empty">visit site</button>
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
                            <button className="btn-empty">visit site</button>
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
                            <button className="btn-empty">visit site</button>
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
                            <button className="btn-empty">visit site</button>
                        </a>
                    </div>
                </SliderItem> */}

            </Slider>
        </Wrapper>
    )
}

export default Portfolio
