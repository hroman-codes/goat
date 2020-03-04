import React, { Component } from 'react';
import './splash.css';

import Cloudsplash from './cloudsplash'; 
import NavHeader from './navHeader';
import SplashGetromanLogo from '../splashcomponents/images/splashGetromanLogo';

// create a cloud component 
// create a shooting star component 
// create big moon left component
// create nav small moon left component
// create nav small moon right component

class Navsplash extends Component {
    render() {
        return (
            <div className='cloudContainer'>
                <NavHeader />
    
                {/* working html with grid */}
                <div className='spaceContainer'>
                    {/* <div className='splashGetromanLogo'>
                        <SplashGetromanLogo />
                    </div> */}
                    <div className='getromanLogo'><SplashGetromanLogo /></div>
 
                </div>
  
                <div className='footer'>
                    <Cloudsplash />
                </div>
            </div>  
        )
    }
} 

export default Navsplash;