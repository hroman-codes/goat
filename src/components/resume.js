import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className= 'resumeGrid'>
                    <Cell col={5}>
                        <div style={{ textAlign: 'center' }}>
                            <img 
                                src='https://media-exp2.licdn.com/dms/image/C4E03AQE4BXiSjDcqLw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=8g5ozA1CihFW1N83fAyuCSNf98t81zPLLjxvTmwjl-0'
                                alt='Heriberto'
                                style={{ height: '200px', borderRadius: '50%' }} 
                            / >
                        </div>

                        <h2 style={{ paddingTop: '1em' }}>Heriberto Roman</h2>
                        <h4 style={{ color: 'grey' }}>Lead Technical Instructor | Dev | AWS Certified Cloud Practitioner</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%'}} />
                        
                        <p>
                        Developer and Instructor with 6 years of dev experience and 4 years of teaching experience. 
                        I joined The Knowledge House in July of 2017. Prior to joining the team, I spent 8 years as 
                        Vice President at LatinosinHigherEd.com (LiHE) a niche startup job board which supported recruitment 
                        advertising for LatinX professionals in the Higher Education sector.</p> 
                        
                        <p>I pursued a novel direction in 2014 - with a 100% focus on Full Stack Javascript Development and Instruction. I was able to secure 
                        a Web Design/Developer internship with Picspotr, then a Jr. Developer apprenticeship with Independent Software, 
                        companies based out of New Haven, Connecticut. Then I graduated from the Thinkful Immersive Full Stack 
                        Development Bootcamp in 2018, which allowed me to become a robust developer and further equipped me to take 
                        on my role as Lead Instructor at The Knowledge House.</p>
                        
                        <p>At TKH, I Leveraged computational thinking and problem-solving 
                        skills to create a new pedagogy (D.A.B) and MVP web app called cThink that helps code newbies learn core 
                        programming concepts through analogies. Passionate about software architecture and cloud computing. Looking for new opportunities.
                        </p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address:</h5>
                        <p>1718 Purdy Street Apt 3H Bronx, NY 10035</p>

                        <h5>Phone:</h5>
                        <p>203-752-8089</p>

                        <h5>Email:</h5>
                        <p>getroman.dev@gmail.com</p>

                        <h5>Web:</h5>
                        <p>getroman.dev</p>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell col={7} className='resumeRightCol'>
                        <h2>Education</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;