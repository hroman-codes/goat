import React, { Component } from 'react';

import Cloudsplash from './cloudsplash'; 
import NavHeader from './navHeader';
import './splash.css';

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
                {/* <div className='cThinkColorContainer'>
                    <div>
                        <NavHeader />
                    </div>
                </div> */}
                <div className='footer'>
                    <Cloudsplash />
                </div>
            </div>  
        )
    }
} 

export default Navsplash;