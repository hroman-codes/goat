import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 2px solid #C4C4C4;
    background: #25283B;
    box-sizing: border-box;
    box-shadow: inset 0 -8px 0 0 rgba(0,0,0,.2),
        1px 1px 0 0 #C4C4C4,
        2px 2px 0 0 #C4C4C4,
        3px 3px 0 0 #C4C4C4,
        4px 4px 0 0 #C4C4C4,
        5px 5px 0 0 #C4C4C4,
        6px 6px 0 0 #C4C4C4,
        7px 7px 0 0 #C4C4C4,
        8px 8px 0 0 #C4C4C4,
        9px 9px 0 0 #C4C4C4,
        10px 10px 0 0 #C4C4C4,
        11px 11px 0 0 #C4C4C4,
        12px 12px 0 0 #C4C4C4;
    color: #C4C4C4;
    cursor: pointer;
    font-size: 35px;
    font-weight: 600;
    font-family: IBM Plex Mono;
    height: 108px;
    line-height: 45px;
    letter-spacing: 0.015em;

    /* QUICK FIX */
    margin-top: 70px;
    /* QUICK FIX END  */

    transition: all .3s ease-out;
    text-align: center;
    width: 455px;
    @media all and (max-width: 1912px) and (min-width:1550px) {
        margin-top: 35px; 
    }
    &:hover {
        color: rgba(255, 255, 255, 1);
    }
    &:active {
        box-shadow:inset 0 -4px 0 0 rgba(0,0,0.2),
            1px 1px 0 0 #C4C4C4,
            2px 2px 0 0 #C4C4C4,
            3px 3px 0 0 #C4C4C4,
            4px 4px 0 0 #C4C4C4,
            5px 5px 0 0 #C4C4C4;
    }
`

const Anchor = styled.a `
    display: flex;
    justify-content: center;
    text-decoration: none;
`

const SplashButton = () => {
    return (
        <Anchor href="https://trello.com/b/yDUnv1W9" target="_blank">
            <Button>LEARN MORE</Button>
        </Anchor>
    )
}

export default SplashButton;