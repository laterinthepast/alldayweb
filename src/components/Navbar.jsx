import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import logo from '../images/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUser } from '@fortawesome/free-regular-svg-icons';
import { faKeyboard, faSitemap } from '@fortawesome/free-solid-svg-icons';

const WrapperMobile = styled.div`
`
const NavListMobile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: sticky;
    padding: 3vw;   
`
const NavItemMobile = styled.div`
    a {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    p {
        font-size: 1rem;
    }
}    
`
const WrapperDesk = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3vw 2vw 2vw 2vw;
    background: rgba(81,218,207,1); 
    position: relative;
    .nav-logo {
        img {
            position: absolute;
            top: 2vw;
            width: 6vw;
        }
    }
`
const NavList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const NavItem = styled.div`
    .nav-link {
        width: 8vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2vw;
    }
    a {
        font-family: 'Courier Prime', monospace;
        color: #000;
        text-decoration: none;
        font-size: 1.1vw;
        font-weight: 300;
        transition: all 0.12s ease-in-out;
        border-right: 1px solid #000;
        border-left: 1px solid transparent;
        
        color: #000;
        :hover {
            background-color: #A0DFDD;
            color: #070707;
            border: 1px solid #000;
            
        }
    }
`
const NavItems = [
    {
        name: 'about',
        href: '#about',
        id: 1
    },
    {
        name: 'offer',
        href: '#offer',
        id: 2
    },
    {
        name: 'work',
        href: '#work',
        id: 3
    },
    {
        name: 'contact',
        href: '#contact',
        id: 4
    }
]

const Navbar = () => {
    const [windowDimension, setWindowDimension] = useState(null);
    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, [])
    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    const isMobile = windowDimension <= 768;
    return (
        <div>
            {isMobile ? (
                <WrapperMobile>
                    <NavListMobile>
                        <NavItemMobile>
                            <a href="#about" className="mobile-link">
                                <p>about</p>
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </NavItemMobile>
                        <NavItemMobile>
                            <a href="#offer" className="mobile-link">
                                <p>offer</p>
                                <FontAwesomeIcon icon={faSitemap} />
                            </a>
                        </NavItemMobile>
                        <NavItemMobile>
                            <a href="#work" className="mobile-link">
                                <p>work</p>
                                <FontAwesomeIcon icon={faKeyboard} />
                            </a>
                        </NavItemMobile>
                        <NavItemMobile>
                            <a href="#contact" className="mobile-link">
                                <p>contact</p>
                                <FontAwesomeIcon icon={faComment} />
                            </a>
                        </NavItemMobile>
                    </NavListMobile>
                </WrapperMobile>
            ) : (
                <WrapperDesk>
                    <div className="nav-logo">
                        <img src={logo} alt="" />
                    </div>
                    <NavList>
                        {NavItems.map(({ name, href, id }) => (
                            <NavItem className="nav-item" key={id} >
                                <a href={href} className="nav-link">{name}</a>
                            </NavItem>
                        ))}
                    </NavList>
                </WrapperDesk>
            )}
        </div>
    )
}

export default Navbar
