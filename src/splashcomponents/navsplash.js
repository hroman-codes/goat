import React, { useEffect, useState } from 'react';
import './splash.css';
import ReactGA from 'react-ga';

import Cloudsplash from './cloudsplash'; 
import SplashGetromanLogo from '../splashcomponents/splashGetromanLogo';
import SplashNavBigMoonLeft from '../splashcomponents/splashNavBigMoonLeft';
import SplashNavSmallMoonLeft from '../splashcomponents/splashNavSmallMoonLeft';
import SplashNavSmallMoonRight from '../splashcomponents/splashNavSmallMoonRight';
import SplashStarsLeft from '../splashcomponents/splashStarsLeft';
import SplashStarsRight from '../splashcomponents/splashStarsRight';
import SplashNavLeftStars from '../splashcomponents/splashNavLeftStars';
import SplashNavRightStars from '../splashcomponents/splashNavRightStars';
import GetromanHeadShot from './images/getroman_head_shot_compressed.jpeg';
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

    // google analytics hook
    useEffect(() => {
        ReactGA.initialize('UA-164057002-1')
        // to report page view
        ReactGA.pageview('/underConstructionPage');
    }, []);

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
                        <p>Software Engineer <span role='img' aria-label='computer'>💻</span> | Technical Instructor <span role='img' aria-label='teacher'>👨‍🏫</span> | AWS Certified Cloud Practitioner <span role='img' aria-label='check'>✅</span></p>
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
                        <p> Contact Me <span role='img' aria-label='phone'>📲 </span><span role='img' aria-label='mail'>📨 </span><span role='img' aria-label='wave'>👋 </span></p>
                        <p> <i className="fas fa-envelope"></i> getroman.dev@gmail.com </p>
                    </div>

                    <div className='splashSocialMediaIcons'>
                        <ReactGA.OutboundLink
                            eventLabel='Linkedin'
                            to='https://www.linkedin.com/in/heribertoroman/'
                            target='_blank'
                            rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in fa-7x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='GitHub'
                            to='https://github.com/getromandev'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-github fa-7x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='Dribble'
                            to='https://dribbble.com/getroman'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-dribbble fa-7x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='DEV'
                            to='https://dev.to/getroman_dev'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-dev fa-6x"></i>  
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='AWS'
                            to='https://www.youracclaim.com/badges/2bcefd6b-915d-4f5d-8e57-cad453b7dc2f/public_url'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-aws fa-6x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='Youtube'
                            to='https://www.youtube.com/channel/UCWLLLB21WpFoNklfx1et25A?'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-youtube fa-6x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='Discord'
                            to='https://discord.gg/nj5k2WhQdh'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i class="fab fa-discord fa-7x"></i>
                        </ReactGA.OutboundLink>

                        
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
                        I have identified my most effective learning style, owned the 
                        stage as a technical instructor, and invented a new pedagogy called Draw Act Build (D.A.B) 
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
                    <p>Software Engineer <span role='img' aria-label='computer'>💻</span> | Technical Instructor <span role='img' aria-label='teacher'>👨‍🏫</span> | AWS Certified Cloud Practitioner <span role='img' aria-label='check'>✅</span></p>
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
                    <p> Contact Me <span role='img' aria-label='phone'>📲 </span><span role='img' aria-label='mail'>📨 </span><span role='img' aria-label='wave'>👋 </span></p>
                        <p> <i class="fas fa-envelope"></i> getroman.dev@gmail.com </p>
                    </div>

                    <div className='splashSocialMediaIconsContainer splashSocialMediaIcons'>
                        <ReactGA.OutboundLink
                            eventLabel='Linkedin'
                            to='https://www.linkedin.com/in/heribertoroman/'
                            target='_blank'
                            rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in fa-7x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='GitHub'
                            to='https://github.com/getromandev'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-github fa-7x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='Dribble'
                            to='https://dribbble.com/getroman'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-dribbble fa-7x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='DEV'
                            to='https://dev.to/getroman_dev'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-dev fa-6x"></i>  
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='AWS'
                            to='https://www.youracclaim.com/badges/2bcefd6b-915d-4f5d-8e57-cad453b7dc2f/public_url'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-aws fa-7x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='Youtube'
                            to='https://www.youtube.com/channel/UCWLLLB21WpFoNklfx1et25A?'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i class="fab fa-youtube fa-6x"></i>
                        </ReactGA.OutboundLink>

                        <ReactGA.OutboundLink
                            eventLabel='Discord'
                            to='https://discord.gg/nj5k2WhQdh'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i class="fab fa-discord fa-6x"></i>
                        </ReactGA.OutboundLink>
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
                        <p className='MVDSMAboutMeText'>In my 6 years of experience as a self-taught developer, 
                        I have identified my most effective learning style, owned the 
                        stage as a technical instructor, and invented a new pedagogy called Draw Act Build (D.A.B) 
                        that helped code-newbies retain technical concepts. I've cultivated my experiences to produce 
                        a visual model that best illustrates my DNA make-up as a developer, communicator, and problem solver. 
                        This is my Minimal Viable Developer Skillset Model.</p>
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
                    <p>Software Engineer <span role='img' aria-label='computer'>💻</span> | Technical Instructor <span role='img' aria-label='teacher'>👨‍🏫</span> | AWS Certified Cloud Practitioner <span role='img' aria-label='check'>✅</span></p>
                    </div>
                </div>

                <div className='headShotPhotoContainer'>
                    <figure className='getromanPictureContainer'>
                        <img className='getromanPicture' src={GetromanHeadShot} alt='head_shot' />
                    </figure>
                </div>

                <div className='getromanHeadlineDetailsContainer'>

                    <div className='getromanIntroTextContainer'>
                    <p> Contact Me <span role='img' aria-label='phone'>📲 </span><span role='img' aria-label='mail'>📨 </span><span role='img' aria-label='wave'>👋 </span></p>
                    </div>

                    <div className='getromanIntroTextButton'>
                        <SplashFooterButton />
                    </div>

                </div>

                <div className='getromanSocialMediaGrid'>
                    <div className='linkedInContainer'>
                        <ReactGA.OutboundLink
                            eventLabel='Linkedin'
                            to='https://www.linkedin.com/in/heribertoroman/'
                            target='_blank'
                            rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in fa-7x"></i>
                        </ReactGA.OutboundLink>
                    </div>

                    <div className='mediumContainer'>
                        <ReactGA.OutboundLink
                            eventLabel='DEV'
                            to='https://dev.to/getroman_dev'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-dev fa-7x"></i>  
                        </ReactGA.OutboundLink>
                    </div>

                    <div className='githubContainer'>
                        <ReactGA.OutboundLink
                            eventLabel='GitHub'
                            to='https://github.com/getromandev'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-github fa-7x"></i>
                        </ReactGA.OutboundLink>
                    </div>

                    <div className='dribbleContainer'>
                        <ReactGA.OutboundLink
                            eventLabel='Discord'
                            to='https://discord.gg/nj5k2WhQdh'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i class="fab fa-discord fa-7x"></i>
                        </ReactGA.OutboundLink>
                    </div>

                    <div className='awsContainer'>
                        <ReactGA.OutboundLink
                            eventLabel='AWS'
                            to='https://www.youracclaim.com/badges/2bcefd6b-915d-4f5d-8e57-cad453b7dc2f/public_url'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i className="fab fa-aws fa-7x"></i>
                        </ReactGA.OutboundLink>
                    </div>

                    <div className='youtubeContainer'>
                        <ReactGA.OutboundLink
                            eventLabel='Youtube'
                            to='https://www.youtube.com/channel/UCWLLLB21WpFoNklfx1et25A?'
                            target='_blank'
                            rel='noopener noreferrer'>
                                <i class="fab fa-youtube fa-7x"></i>
                        </ReactGA.OutboundLink>
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
                        <p className='MVDSMAboutMeText'>In my 6 years of experience as a self-taught developer, 
                        I have identified my most effective learning style, owned the 
                        stage as a technical instructor, and invented a new pedagogy called Draw Act Build (D.A.B) 
                        that helped code-newbies retain technical concepts. I've cultivated my experiences to produce 
                        a visual model that best illustrates my DNA make-up as a developer, communicator, and problem solver. 
                        This is my Minimal Viable Developer Skillset Model.</p>
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