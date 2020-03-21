import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 2px solid #25283B;
    background: #C4C4C4;
    box-sizing: border-box;
    box-shadow: inset 0 -8px 0 0 rgba(0,0,0,.2),
        1px 1px 0 0 #25283B,
        2px 2px 0 0 #25283B,
        3px 3px 0 0 #25283B,
        4px 4px 0 0 #25283B,
        5px 5px 0 0 #25283B,
        6px 6px 0 0 #25283B,
        7px 7px 0 0 #25283B,
        8px 8px 0 0 #25283B,
        9px 9px 0 0 #25283B,
        10px 10px 0 0 #25283B,
        11px 11px 0 0 #25283B,
        12px 12px 0 0 #25283B;
    color: #25283B;
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
    &:hover {
        color: rgba(44, 48, 67, 0.8);
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

const SplashFooterButton = () => {
    return (
        <Anchor href="mailto:getroman.dev@gmail.com?subject=Heriberto we would like to hire you, Let's talk." target="_blank">
            <Button>MESSAGE ME</Button>
        </Anchor>
    )
}

export default SplashFooterButton;