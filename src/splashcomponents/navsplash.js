import React, { Component } from 'react';
import './splash.css';

import Cloudsplash from './cloudsplash'; 
import NavHeader from './navHeader';
import SplashGetromanLogo from '../splashcomponents/images/splashGetromanLogo';
import SplashNavBigMoonLeft from '../splashcomponents/images/splashNavBigMoonLeft'

// create a cloud component 
// create big moon left component
// create a shooting star component 
// create nav small moon left component
// create nav small moon right component

class Navsplash extends Component {
    render() {
        return (
            <div className='cloudContainer'>
                <NavHeader />
                <div className='spaceContainer'>
                    <div className='splashNavBigMoonLeft'> <SplashNavBigMoonLeft /> </div>
                    <div className='getromanLogo'> <SplashGetromanLogo /> </div>
                </div>
  
                <div className='footer'>
                    <Cloudsplash />
                </div>
                
            </div>  
        )
    }
} 

export default Navsplash;