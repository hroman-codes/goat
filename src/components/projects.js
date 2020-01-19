import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'; 

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    //  create a toggle categries helper funtion to toggle projects by category
    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className='projectsGrid'>
                    {/* project 1 */}
                    <Card shadow={ 5 } style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'URL(https://media-exp2.licdn.com/dms/image/C4E03AQE4BXiSjDcqLw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=8g5ozA1CihFW1N83fAyuCSNf98t81zPLLjxvTmwjl-0) center / cover' }}>
                            Javascript Project #1
                        </CardTitle>
                        <CardText>
                            This is my Vanilla Javascript projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* project 2 */}
                    <Card shadow={ 5 } style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'URL(https://media-exp2.licdn.com/dms/image/C4E03AQE4BXiSjDcqLw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=8g5ozA1CihFW1N83fAyuCSNf98t81zPLLjxvTmwjl-0) center / cover' }}>
                            Javascript Project #1
                        </CardTitle>
                        <CardText>
                            This is my Vanilla Javascript projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* project 3 */}
                    <Card shadow={ 5 } style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'URL(https://media-exp2.licdn.com/dms/image/C4E03AQE4BXiSjDcqLw/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=8g5ozA1CihFW1N83fAyuCSNf98t81zPLLjxvTmwjl-0) center / cover' }}>
                            Javascript Project #1
                        </CardTitle>
                        <CardText>
                            This is my Vanilla Javascript projects
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>These are my React projects</h1>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>These are my jQuery projects</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>This is my work on postgres</h1>
                </div>
            )
        }
    }
    
    render() {
        console.log(this.state);
        return (
            <div className='categoryTabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                    <Tab>JQuery</Tab>
                    <Tab>Wha</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className='content'>{ this.toggleCategories() }</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Project;