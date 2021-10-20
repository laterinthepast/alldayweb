import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

const Button = styled.div`
    position: fixed;
    width: 100%;
    bottom: 10%;
    left: 90%;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    .icon {
        
    }
    
    @media (max-width: 768px){
        bottom: 2%;
        left: 85%;
        font-size: 2rem;
    }
`
const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);
    return (
        <Button>
            <FontAwesomeIcon className="icon" icon={faArrowAltCircleUp} onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </Button>
    );
}

export default ScrollButton;
