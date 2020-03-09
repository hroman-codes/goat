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
import SplashNavRightStars from '../splashcomponents/splashNavRightStars';
import GetromanHeadShot from './images/getroman_head_shot.jpeg';
import SplashGetromanLogoWithText from '../splashcomponents/splashGetromanLogoWithText';

class Navsplash extends Component {
    render() {
        return (
            <div>
                <div className='navTopBarContainer'> <NavHeader /> </div>
                <div className='navBodyContainer'>
                    <div className='splashNavBigMoonLeft'> <SplashNavBigMoonLeft /> </div>
                    <div className='splashNavSmallMoonLeft'> <SplashNavSmallMoonLeft /> </div>
                    <div className='splashNavLeftStars'> <SplashNavLeftStars /> </div>
                    <div className='getromanLogo'><SplashGetromanLogo /></div>
                    <div className='splashNavSmallMoonRight'> <SplashNavSmallMoonRight /> </div>
                    <div className='splashNavRightStars'> <SplashNavRightStars /> </div>
                </div>

                <div className='navFooterContainer'>
                    <div className='cloudSplash'> <Cloudsplash /> </div>
                    <div className='splashStarsLeft'> <SplashStarsLeft /> </div>
                    <div className='splashStarsRight'> <SplashStarsRight /> </div>
                    <div className='underConstructionText'>
                        <p>The site is currently under construction<span role='img' aria-label='construction'>👷 🚧</span>. But in the meantime here is a little about myself.</p>
                    </div>
                </div>

                <div className='mainContainerHeader'></div>
                <div className='mainContainer'>
                    <div className='getromanPictureContainer'>
                        <img className='getromanPicture' src={GetromanHeadShot} alt='head_shot' />
                    </div>

                    <div className='getromanDetails'> <SplashGetromanLogoWithText /> </div>

                </div>
            </div>  
        )
    }
} 

export default Navsplash;