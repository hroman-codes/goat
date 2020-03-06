import React, { Component } from 'react';
import './splash.css';

import Cloudsplash from './cloudsplash'; 
import NavHeader from './navHeader';
import SplashGetromanLogo from '../splashcomponents/splashGetromanLogo';
import SplashNavBigMoonLeft from '../splashcomponents/splashNavBigMoonLeft';
import SplashNavSmallMoonLeft from '../splashcomponents/splashNavSmallMoonLeft';
import SplashNavSmallMoonRight from '../splashcomponents/splashNavSmallMoonRight';
import SplashStarsLeft from '../splashcomponents/splashStarsLeft';
import SplashStarsRight from '../splashcomponents/splashStarsRight';
import SplashNavLeftStars from '../splashcomponents/splashNavLeftStars';

// create mini stars component

class Navsplash extends Component {
    render() {
        return (
            <div>
                <div className='cloudContainer'> <NavHeader /> </div>
                <div className='spaceContainer'>
                    <div className='splashNavBigMoonLeft'> <SplashNavBigMoonLeft /> </div>
                    <div className='splashNavSmallMoonLeft'> <SplashNavSmallMoonLeft /> </div>
                    <div className='splashNavLeftStars'> <SplashNavLeftStars /> </div>
                    <div className='getromanLogo'><SplashGetromanLogo /></div>
                    <div className='splashNavSmallMoonRight'> <SplashNavSmallMoonRight /> </div>
                </div>
                <div className='footerContainer'>
                    <div className='cloudSplash'> <Cloudsplash /> </div>
                    <div className='splashStarsLeft'> <SplashStarsLeft /> </div>
                    <div className='splashStarsRight'> <SplashStarsRight /> </div>
                    <div className='underConstructionText'>
                        <p>Site is Currently Under Construction. But in the mean time here is a little about myself.</p>
                    </div>
                </div>
            </div>  
        )
    }
} 

export default Navsplash;