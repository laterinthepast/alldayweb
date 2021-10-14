import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo1.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw;
    background: rgba(81,218,207,1);    
    .nav-logo {
        img {
            position: absolute;
            width: 5vw;
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
        width: 10vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2vw;
    }
    a {
        color: #000;
        text-decoration: none;
        font-size: 1.5vw;
        font-weight: 800;
        transition: all 0.1s ease-in-out;
        :hover {
            background-color: #A0DFDD;
            color: #070707;
        }
    }
`
const NavItems = [
    {
        name: 'about us',
        href: '#about',
        id: 1
    },
    {
        name: 'services',
        href: '#about',
        id: 2
    },
    {
        name: 'work',
        href: '#about',
        id: 3
    },
    {
        name: 'contact',
        href: '#about',
        id: 4
    }
]
const Navbar = () => {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default Navbar
