import React from 'react'
import styled from 'styled-components';
import web2 from '../images/themes/mockup2.png'
import web3 from '../images/themes/mockup3.png'
import web4 from '../images/themes/mockup4.png'
import web5 from '../images/themes/mockup5.png'
import web6 from '../images/themes/mockup6.png'
import web7 from '../images/themes/mockup7.png'
import web8 from '../images/themes/mockup8.png'
import web9 from '../images/themes/mockup9.png'
import web11 from '../images/themes/mockup11.png'
import web13 from '../images/themes/mockup13.png'
import web15 from '../images/themes/mockup15.png'
import web16 from '../images/themes/mockup16.png'
import web17 from '../images/themes/mockup17.png'
import web18 from '../images/themes/mockup18.png'
import web19 from '../images/themes/mockup19.png'
import web20 from '../images/themes/mockup20.png'
import web21 from '../images/themes/mockup21.png'
import web23 from '../images/themes/mockup23.png'
import web24 from '../images/themes/mockup24.png'

const Wrapper = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(26,50,121,1) 100%);
    h1{
        padding: 2vw;
        color: #fff;
        font-size: 3vw;
        font-weight: 800;
        @media (max-width: 768px){
            font-size: 5vw;
            left: 0;
        }
    }
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2vw;
    padding: 0vw 5vw 5vw;
    max-width: 100%;
`
const Image = styled.div`
    overflow: hidden;
    img {
     width: 100%;   
     transition: all 0.3s ease-in-out;
     &:hover {
         transform: scale(1.2);
     }
    } 
`
const images = [
    {
        id: 1,
        src: web2,
        href: "https://mockup-2v1.netlify.app/"
    },
    {
        id: 2,
        src: web3,
        href: "https://mockup-3v1.netlify.app/"
    },
    {
        id: 3,
        src: web4,
        href: "https://mockup-4v1.netlify.app/"
    },
    {
        id: 4,
        src: web5,
        href: "https://mockup-5v1.netlify.app/"
    },
    {
        id: 5,
        src: web6,
        href: "https://mockup-6v1.netlify.app/"
    },
    {
        id: 6,
        src: web7,
        href: "https://mockup-7v1.netlify.app/"
    },
    {
        id: 7,
        src: web8,
        href: "https://mockup-8v1.netlify.app/"
    },
    {
        id: 8,
        src: web9,
        href: "https://mockup-9v1.netlify.app/"
    },
    {
        id: 9,
        src: web11,
        href: "https://mockup-11v1.netlify.app/"
    }
    ,
    {
        id: 10,
        src: web13,
        href: "https://mockup13v1.netlify.app/"
    },
    {
        id: 11,
        src: web15,
        href: "https://mockup15v1.netlify.app/"
    },
    {
        id: 12,
        src: web16,
        href: "https://mockup16v1.netlify.app/"
    },
    {
        id: 13,
        src: web17,
        href: "https://mockup17v1.netlify.app/"
    },
    {
        id: 14,
        src: web18,
        href: "https://mockup18v1.netlify.app/"
    },
    {
        id: 15,
        src: web19,
        href: "https://mockup19v1.netlify.app/"
    },
    {
        id: 16,
        src: web20,
        href: "https://mockup20v1.netlify.app/"
    },
    {
        id: 17,
        src: web21,
        href: "https://mockup21v1.netlify.app/"
    },
    {
        id: 18,
        src: web23,
        href: "https://mockup23v1.netlify.app/"
    },
    {
        id: 19,
        src: web24,
        href: "https://mockup24v1.netlify.app/"
    }

]
const Themes = () => {
    return (
        <Wrapper>
            <h1>Choose from available themes</h1>
            <Container>
                {images.map(({ src, href, id }) => (
                    <Image className="nav-item" key={id} >
                        <a href={href} target="_blank" rel="noreferrer" className="nav-link">
                            <img src={src} alt="" />
                        </a>
                    </Image>
                ))}
            </Container>
        </Wrapper>
    )
}

export default Themes
