import React from "react";
import Slider from "react-slick";
import project2desk from '../images/meller.png'
import project3desk from '../images/quartz.png'
import project4desk from '../images/crypto.png'
import project5desk from '../images/portfolio.png'
import project6desk from '../images/quartz2.png'
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-bottom: 7vw;
    overflow: hidden;
    background-color: #fdfff5;
   `
const SliderItem = styled.div`
    display: flex !important;
    justify-content: space-between;
    align-items: center;
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
            font-family: 'Courier Prime', monospace;
        }
        p {
            font-size: 1.3rem;
            text-align: justify;
            padding: 2vw 0;
            font-family: 'Courier Prime', monospace;
        }
        button {
                width: 16vw;
                height: 4vw;
                font-size: 1.5vw;
            }
    }
    @media (max-width:768px){
        flex-direction: column;
        width: 100%;
        padding: 5vw;
        height: auto;
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
                color: #FCCC00;
            }
            p {
                padding-bottom: 9vw;
            }
            button {
                width: 40vw;
                height: 12vw;
                font-size: 5vw;
            }
        }
    }
`
const SliderItems = [
    {
        id: 2,
        img: project2desk,
        title: "mellerdramatic",
        desc: "One of the first projects built with React. Design, build and management of the website. Website will be updated with new designs and tattoo photos. Future development may involve adding a shop for selling Bry's artwork. Website built from scratch with React and Sass.",
        href: "https://mellerdramatic.netlify.app/",
    },
    {
        id: 3,
        img: project3desk,
        title: "quartz scientific",
        desc: "Simple landing website for a local business. Design, build and management. Website buidt from scratch - Currently awaiting client update",
        href: "https://quartz-scientific.netlify.app/",
    },
    {
        id: 4,
        img: project4desk,
        title: "cryptofolio",
        desc: "Cryptofolio is the latest project and not yet completed. Cryptocurrencies wallet with charts and all the necesarry info about majority of cryptoassets. Buildt from scratch using React, styled components and Node.js for backend. Possible finish by the end of 2021.",
        href: "https://github.com/laterinthepast/cryptofolio",
    },
    {
        id: 5,
        img: project5desk,
        title: "lookmummyportfolio.site",
        desc: "Front End Portfolio Website",
        href: "https://lookmummyportfolio.site/",
    },
    {
        id: 6,
        img: project6desk,
        title: "quartz scientific v2",
        desc: "Second iteration of the Quartz Scientific website. Design, build and management. Website buidt from scratch - Currently awaiting client update",
        href: "https://quartzsample.netlify.app/",
    },
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
                {SliderItems.map(({ img, title, desc, href, id }) => (
                    <SliderItem className="nav-item" key={id} >
                        <div className="slider-img">
                            <img className="slider-img-one" src={img} alt="" />
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
            </Slider>
        </Wrapper>
    )
}

export default Portfolio
