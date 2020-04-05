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
    @media all and (max-width: 1588px) and (min-width: 1200px) {
        margin-top: 15px; 
        width: 355px;
    }
    @media all and (max-width: 1200px) and (min-width:1027px) {
        margin-top: 15px; 
        width: 355px;
    }
    @media all and (max-width: 1026px) and (min-width:968px) {
        font-size: 25px;
        height: 80px;
        width: 200px;
    }
    @media all and (max-width: 967px) and (min-width:730px) {
        margin-top: 0px;
        font-size: 20px;
        height: 75px;
        width: 178px;
    }
    @media all and (max-width: 729px) and (min-width:600px) {
        margin-top: 0px;
        font-size: 20px;
        height: 75px;
        width: 178px;
    }
    @media all and (max-width: 599px) and (min-width: 500px) {
        margin-top: 0px;
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
        font-size: 25px;
        font-weight: 600;
        font-family: IBM Plex Mono;
        height: 90px;
        line-height: 45px;
        letter-spacing: 0.015em;
        transition: all .3s ease-out;
        text-align: center;
        width: 250px;
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
    }
    @media all and (max-width: 499px) and (min-width:398px) {
        margin-top: 0px;
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
        font-size: 20px;
        font-weight: 600;
        font-family: IBM Plex Mono;
        height: 60px;
        line-height: 45px;
        letter-spacing: 0.015em;
        transition: all .3s ease-out;
        text-align: center;
        width: 200px;
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
    }
    @media all and (max-width: 397px) and (min-width:1px) {
        margin-top: 5px;
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
        font-size: 20px;
        font-weight: 600;
        font-family: IBM Plex Mono;
        height: 60px;
        line-height: 45px;
        letter-spacing: 0.015em;
        transition: all .3s ease-out;
        text-align: center;
        width: 200px;
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
    }
`

const Anchor = styled.a `
    display: flex;
    justify-content: center;
    text-decoration: none;
`

const SplashFooterButton = () => {
    return (
        <Anchor href="mailto:getroman.dev@gmail.com?subject=Heriberto we would like to hire you, let's talk." target="_blank">
            <Button>MESSAGE ME</Button>
        </Anchor>
    )
}

export default SplashFooterButton;