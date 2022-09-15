import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Getromanlogo from './images/getromanlogo';
import VideoBG from 'reactjs-videobg';
import mp4 from './videos/neon.mp4';
import Music from './music/music';
import Splashpage from './splashcomponents/splash';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto', height: 'auto', overflowY: 'scroll'}}>
                <Grid className='landingGrid'>
                    <Cell col={12}>
                        <Getromanlogo
                            style={{height: '250px'}}
                        />
                        {/* <Introvideo /> */}
                        <VideoBG>
                            <VideoBG.Source src={mp4} type='video/mp4' />
                        </VideoBG>
                        
                        <div className='bannerText'>
                            <h1>Lead Technical Instructor | Dev | AWS Certified Cloud Practitioner</h1>
                        <hr/>

                        <p>HTML | CSS | Javascript | Design | Express | SQL | MongoDB | React | Redux | React-Native</p>

                        <div className='socialLinks'>

                            {/* linkedin */}
                            <a href='https://www.linkedin.com/in/heribertoroman/' rel='noopener noreferrer' target='_blank'>
                                <i className="fab fa-linkedin-in fa-2x"></i>
                            </a>

                            {/* github */}
                            <a href='https://github.com/hroman-codes' rel='noopener noreferrer' target='_blank'>
                                <i className="fab fa-github fa-2x"></i>
                            </a>

                             {/* AWS Cert */}
                            <a href='https://www.credly.com/badges/2bcefd6b-915d-4f5d-8e57-cad453b7dc2f/linked_in_profile' rel='noopener noreferrer' target='_blank'>
                                <i className="fab fa-aws fa-2x"></i>
                            </a>

                            {/* medium */}
                            <a href='https://hroman-codes.medium.com/' rel='noopener noreferrer' target='_blank'>
                                <i className="fab fa-medium-m fa-2x"></i>
                            </a>

                            {/* dribble */}
                            <a href='https://dribbble.com/hroman_codes' rel='noopener noreferrer' target='_blank'>
                                <i className="fab fa-dribbble fa-2x"></i>
                            </a>
                        </div>
                        </div>
                        <Music />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
