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
import SplashButton from '../splashcomponents/splashButton';
import SplashFooterMVDSM from '../splashcomponents/splashFooterMVDSM'; 
import SplashWavyFooter from '../splashcomponents/splashWavyFooter'; 
import SplashGetromanSpaceShip from '../splashcomponents/splashGetromanSpaceShip';
import SplashFooterStars from '../splashcomponents/splashFooterStars';
import SplashFooterButton from '../splashcomponents/splashFooterButton';

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

                <div className='containerBreaker'></div>
                <div className='mainContainer'>
                    <div className='getromanPictureContainer'>
                        <img className='getromanPicture' src={GetromanHeadShot} alt='head_shot' />
                    </div>

                    <div className='splashGetromanLogoWithText'>
                            <SplashGetromanLogoWithText /> 
                    </div>

                    <div className='getromanIntroText'> 
                        <p> Developer | Technical Instructor | AWS Certified Cloud Practitioner </p>
                        <p> <i class="fas fa-envelope"></i> getroman.dev@gmail.com </p>
                    </div>

                    <div className='splashSocialMediaIcons'>
                        <a href='https://www.linkedin.com/in/heribertoroman/' target='_blank'>
                            <i class="fab fa-linkedin-in fa-7x"></i>
                        </a>

                        <a href='https://github.com/getromandev' target='_blank'>
                            <i class="fab fa-github fa-7x"></i>
                        </a>

                        <a href='https://dribbble.com/getroman' target='_blank'>
                            <i class="fab fa-dribbble fa-7x"></i>
                        </a>

                        <a href='https://medium.com/@getroman.dev' target='_blank'>
                            <i class="fab fa-medium-m fa-7x"></i>
                        </a>
                        
                        <a href='https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-12-02&ci=AWS01186088' target='_blank'>
                            <i class="fab fa-aws fa-7x"></i>
                        </a>
                    </div>

                    <div className='bottomMainContainer'></div>

                    <div className='bottomMainContainerDetails'>
                        <p>Follow the dev process of Getroman.dev.</p>
                        <SplashButton />
                    </div>

                </div>

                <div className='containerBreaker'></div>

                <div className='footerContainer'>
                    <div className='footerHeadingContainer'>
                        <h1 className='footerHeading'>My Minimal Viable <br /> Developer Skillset Model</h1>
                    </div>

                    <div className='footerTextContainer'>
                        <p className='footerText'>In my 6 years of experience as a self-taught developer, 
                        I have learned how to learn, identified my most effective learning style, owned the 
                        stage as a technical instructor and invented a new pedagogy called Draw Act Build (D.A.B) 
                        that helped code-newbies retain technical concepts. I've cultivated my experiences to produce 
                        a visual model that best illustrates my DNA make-up as a developer, communicator, and problem solver. 
                        This is my Minimal Viable Developer Skillset Model.</p>
                    </div>

                    <div className='MVDSMContainer'>
                        <SplashFooterMVDSM />
                    </div>

                    <div className='splashFooterStars'>
                        <SplashFooterStars />
                    </div>

                    <div className='leftGetromanSpaceShip'>
                        <SplashGetromanSpaceShip />
                    </div>

                    <div className='rightGetromanSpaceShip'>
                        <SplashGetromanSpaceShip />
                    </div>

                    <div className='splashWavyFooter'>
                        <SplashWavyFooter /> 
                    </div>

                    <div className='splashFooterButton'>
                        <SplashFooterButton />
                    </div>

                </div>

            </div>  
        )
    }
} 

export default Navsplash;

