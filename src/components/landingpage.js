import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Getromanlogo from './images/getromanlogo'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landingGrid'>
                    <Cell col={12}>
                        <Getromanlogo
                            style={{height: '250px'}}
                        />
                        {/* <img 
                            src='https://media-exp2.licdn.com/dms/image/C4E03AQE4BXiSjDcqLw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=8g5ozA1CihFW1N83fAyuCSNf98t81zPLLjxvTmwjl-0'
                            alt='getroman logo'
                            className='getromanLogo'
                            style={{ height: '250px', borderRadius: '50%'}} 
                        /> */}

                        <div className='bannerText'>
                            <h1>Lead Technical Instructor | Dev | AWS Certified Cloud Practitioner</h1>
                        <hr/>

                        <p>HTML | CSS | Javascript | Design | Express | SQL | MongoDB | React | Redux | React-Native</p>

                        <div className='socialLinks'>

                            {/* linkedin */}
                            <a href='https://www.linkedin.com/in/heribertoroman/' rel='noopener noreferrer' target='_blank'>
                                <i class="fab fa-linkedin-in fa-2x"></i>
                            </a>

                            {/* github */}
                            <a href='https://github.com/getromandev' rel='noopener noreferrer' target='_blank'>
                                <i class="fab fa-github fa-2x"></i>
                            </a>

                             {/* AWS Cert */}
                            <a href='https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-12-02&ci=AWS01186088' rel='noopener noreferrer' target='_blank'>
                                <i class="fab fa-aws fa-2x"></i>
                            </a>

                            {/* medium */}
                            <a href='https://medium.com/@getroman.dev' rel='noopener noreferrer' target='_blank'>
                                <i class="fab fa-medium-m fa-2x"></i>
                            </a>

                            {/* dribble */}
                            <a href='https://dribbble.com/getroman' rel='noopener noreferrer' target='_blank'>
                                <i class="fab fa-dribbble fa-2x"></i>
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;