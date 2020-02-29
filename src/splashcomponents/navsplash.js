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
                
                <div className='spaceContainer'>
                    {/* <div className='splashGetromanLogo'>
                        <SplashGetromanLogo />
                    </div> */}
                    <div className='item1'></div>
                    <div className='item2'></div>
                    <div className='item3'></div>
                    <div className='item4'><SplashGetromanLogo /></div>
                    <div className='item5'></div>
                    <div className='item6'></div>
                    <div className='item7'></div>
                    {/* <div className='item8'></div>
                    <div className='item9'></div>
                    <div className='item10'></div>
                    <div className='item11'></div>
                    <div className='item12'></div> */}
                    {/* <div className='item2'></div>
                    <div className='item3'></div> */}
                </div>
  
                <div className='footer'>
                    <Cloudsplash />
                </div>
            </div>  
        )
    }
} 

export default Navsplash;