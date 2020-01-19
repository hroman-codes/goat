import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl'; 

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
                <div>
                    <h1>These are my Vanilla Javascript projects</h1>            
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
                    <h1>What can go here?</h1>
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

                <section className='projectsGrid'>
                    { this.toggleCategories() }
                </section>
            </div>
        )
    }
}

export default Project;