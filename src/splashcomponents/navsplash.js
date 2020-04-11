import React, { useEffect, useState } from 'react';
import './splash.css';

import Cloudsplash from './cloudsplash'; 
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

const Navsplash = () => {

    // need to set up state that handles > 967
    // need to set up state that handles > 600
    // anything under 600 will be caught at the end

    const [isDesktopViewAbove967, setDesktopViewAbove967] = useState(window.innerWidth > 967);

    const updateMediaViewAbove967 = () => {
        setDesktopViewAbove967(window.innerWidth > 967);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMediaViewAbove967);
        return () => window.removeEventListener('resize', updateMediaViewAbove967);
    });

    const [isDeskTopViewAbove599, setDesktopViewABove599] = useState(window.innerWidth > 599);

    const updateMediaViewAbove599 = () => {
        setDesktopViewABove599(window.innerWidth > 599)
    }

    useEffect(() => {
        window.addEventListener('resize', updateMediaViewAbove599);
        return () => window.removeEventListener('resize', updateMediaViewAbove599);
    })

    if (isDesktopViewAbove967) {
        return (
            <div>
                <div className='navTopBarGrid'> 
                    <div className='navHeader1'></div>
                    <div className='navHeader2'></div>
                    <div className='navHeader3'></div>
                    <div className='navHeader4'></div>
                </div>

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

                    <div className='splashFooterButton'>
                        <SplashFooterButton />
                    </div>

                    <div className='splashWavyFooter'>
                        <SplashWavyFooter /> 
                    </div>

                </div>
            </div>
        )
    } else if (isDeskTopViewAbove599) {
        return (
            <div>

                <div className='navTopBarGrid'> 
                    <div className='navHeader1'></div>
                    <div className='navHeader2'></div>
                    <div className='navHeader3'></div>
                    <div className='navHeader4'></div>
                </div>

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

                <div className='headShotPhotoContainer'>
                    <figure className='getromanPictureContainer'>
                        <img className='getromanPicture' src={GetromanHeadShot} alt='head_shot' />
                    </figure>
                </div>

                <div className='getromanHeadlineDetailsContainer'>
                    <div className='splashGetromanLogoWithText' >
                        <SplashGetromanLogoWithText /> 
                    </div>

                    <div className='getromanIntroTextContainer'>
                        <p> Developer | Technical Instructor | AWS Certified Cloud Practitioner </p>
                        <p> <i class="fas fa-envelope"></i> getroman.dev@gmail.com </p>
                    </div>

                    <div className='splashSocialMediaIconsContainer splashSocialMediaIcons'>
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
                </div>

                
                <div className='coreValuesShotPhotoContainer'>
                    <figure className='coreValuesGetromanPictureContainer'>
                        <img className='coreValuesGetromanPicture' src={GetromanHeadShot} alt='head_shot' />
                    </figure>
                </div>

                <div className='getromanLearnMoreGrid'>
                    <div className='getromanLearnMoreContainer'>
                        <p>Follow the dev process of Getroman.dev.</p>
                        <SplashButton />
                    </div>
                </div>

                <div className='containerBreaker'></div>
                
                <div className='footerGrid'>
                    <div className='MVDSMHeadingContainer'>
                        <h1 className='MVDSMHeadingText'>My Minimal Viable <br /> Developer Skillset Model</h1>
                    </div>

                    <div className='MVDSMAboutMeContainer'> 
                        <p className='MVDSMAboutMeText'>
                            In my 6 years of experience as a self-taught developer, 
                            I have learned how to learn, identified my most effective learning style, owned the 
                            stage as a technical instructor and invented a new pedagogy called Draw Act Build (D.A.B) 
                            that helped code-newbies retain technical concepts. I've cultivated my experiences to produce 
                            a visual model that best illustrates my DNA make-up as a developer, communicator, and problem solver. 
                            This is my Minimal Viable Developer Skillset Model.
                        </p>
                    </div>

                    <div className='MVDSMGraphContainer'>
                        <SplashFooterMVDSM />
                    </div>

                    <div className='footerStarsContainer'>
                        <SplashFooterStars />
                    </div>

                    <div className='footerLeftSpaceship'>
                        <SplashGetromanSpaceShip />
                    </div>

                    <div className='footerButtonContainer'>
                        <SplashFooterButton />
                    </div>

                    <div className='footerRightSpaceship'>
                        <SplashGetromanSpaceShip />
                    </div>

                    <div className='footerWavyContainer'>
                        <SplashWavyFooter />
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div>

                <div className='navTopBarGrid'> 
                    <div className='navHeader1'></div>
                    <div className='navHeader2'></div>
                    <div className='navHeader3'></div>
                    <div className='navHeader4'></div>
                </div>

                <div className='navBodyContainer'>
                    <div className='splashNavLeftStars'> <SplashNavLeftStars /> </div>
                    <div className='splashGetromanLogoWithText'> <SplashGetromanLogoWithText /></div>
                    <div className='splashNavRightStars'> <SplashNavRightStars /> </div>
                </div>

                <div className='navFooterContainer'>
                    <div className='underConstructionText'>
                        <p>The site is currently under construction<span role='img' aria-label='construction'>👷 🚧</span>. But in the meantime here is a little about myself.</p>
                    </div>
                </div>

                <div className='headShotPhotoContainer'>
                    <figure className='getromanPictureContainer'>
                        <img className='getromanPicture' src={GetromanHeadShot} alt='head_shot' />
                    </figure>
                </div>

                <div className='getromanHeadlineDetailsContainer'>

                    <div className='getromanIntroTextContainer'>
                        <p> Developer | Technical Instructor | AWS Certified Cloud Practitioner </p>
                    </div>

                    <div className='getromanIntroTextButton'>
                        <SplashFooterButton />
                    </div>

                </div>

                <div className='getromanSocialMediaGrid'>

                    <div className='linkedInContainer'>
                        <a href='https://www.linkedin.com/in/heribertoroman/' target='_blank' className='splashSocialMediaIcons'>
                            <i class="fab fa-linkedin-in fa-7x"></i>
                        </a>
                    </div>

                    <div className='mediumContainer'>
                        <a href='https://medium.com/@getroman.dev' target='_blank' className='splashSocialMediaIcons'>
                            <i class="fab fa-medium-m fa-7x"></i>
                        </a>
                    </div>

                    <div className='githubContainer'>
                        <a href='https://github.com/getromandev' target='_blank' className='splashSocialMediaIcons'>
                            <i class="fab fa-github fa-7x"></i>
                        </a>
                    </div>

                    <div className='dribbleContainer'>
                        <a href='https://dribbble.com/getroman' target='_blank' className='splashSocialMediaIcons'>
                            <i class="fab fa-dribbble fa-7x"></i>
                        </a>
                    </div>

                    <div className='awsContainer'>
                        <a href='https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-12-02&ci=AWS01186088' target='_blank' className='splashSocialMediaIcons'>
                            <i class="fab fa-aws fa-7x"></i>
                        </a>
                    </div>

                </div>

                
                <div className='coreValuesShotPhotoContainer'>
                    <figure className='coreValuesGetromanPictureContainer'>
                        <img className='coreValuesGetromanPicture' src={GetromanHeadShot} alt='head_shot' />
                    </figure>
                </div>

                <div className='containerBreaker'></div>
                
                <div className='footerGrid'>
                    <div className='MVDSMHeadingContainer'>
                        <h2 className='MVDSMHeadingText'>My Minimal Viable <br /> Developer Skillset Model</h2>
                    </div>

                    <div className='MVDSMAboutMeContainer'> 
                        <p className='MVDSMAboutMeText'>
                            In my 6 years of experience as a self-taught developer, 
                            I have learned how to learn, identified my most effective learning style, owned the 
                            stage as a technical instructor and invented a new pedagogy called Draw Act Build (D.A.B) 
                            that helped code-newbies retain technical concepts. I've cultivated my experiences to produce 
                            a visual model that best illustrates my DNA make-up as a developer, communicator, and problem solver. 
                            This is my Minimal Viable Developer Skillset Model.
                        </p>
                    </div>

                    <div className='MVDSMGraphContainer'>
                        <SplashFooterMVDSM />
                    </div>

                    <div className='footerContainer'>
                        <p>Follow the dev process of Getroman.dev.</p>
                    </div>  

                </div>

                <div className='footerButtonGrid'>
                    <div className='footerButtonContainer'>
                        <SplashButton />
                    </div>
                </div>
            </div>
        )
    }
};

export default Navsplash;