import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contactBody'>
                <Grid className='contactGrid'>
                    <Cell col={6}>
                        <h2>Heriberto Roman</h2>
                        <img 
                            src='https://media-exp2.licdn.com/dms/image/C4E03AQE4BXiSjDcqLw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=8g5ozA1CihFW1N83fAyuCSNf98t81zPLLjxvTmwjl-0'
                            alt='Heriberto'
                            style={{ height: '250px', borderRadius: '50%'}} 
                        />
                        <p style={{ width: '90%', margin: 'auto', paddingTop: '1em' }}>
                        Developer and Instructor with 6 years of dev experience and 4 years of teaching experience. 
                        I joined The Knowledge House in July of 2017. Prior to joining the team, I spent 8 years as 
                        Vice President at LatinosinHigherEd.com (LiHE) a niche startup job board which supported recruitment 
                        advertising for LatinX professionals in the Higher Education sector.</p> 
                        
                        <p style={{ width: '90%', margin: 'auto', paddingTop: '1em' }}>I pursued a novel direction in 2014 - with a 100% focus on Full Stack Javascript Development and Instruction. I was able to secure 
                        a Web Design/Developer internship with Picspotr, then a Jr. Developer apprenticeship with Independent Software, 
                        companies based out of New Haven, Connecticut. Then I graduated from the Thinkful Immersive Full Stack 
                        Development Bootcamp in 2018, which allowed me to become a robust developer and further equipped me to take 
                        on my role as Lead Instructor at The Knowledge House.</p>
                        
                        <p style={{ width: '90%', margin: 'auto', paddingTop: '1em' }}>At TKH, I Leveraged computational thinking and problem-solving 
                        skills to create a new pedagogy (D.A.B) and MVP web app called cThink that helps code newbies learn core 
                        programming concepts through analogies. Passionate about software architecture and cloud computing. Looking for new opportunities.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className='contactList'>
                            <List>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'IBM Plex Mono' }}>
                                        <i class="fas fa-phone-square-alt" aria-hidden='true' />203-752-8089
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'IBM Plex Mono' }}>
                                        <i class="fas fa-envelope" aria-hidden='true' />
                                        getroman.dev@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;