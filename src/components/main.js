import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Resume from './resume';
import Project from './projects';
import Contact from './contact';
import About from './aboutme';

const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        {/* <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Project} />
        <Route path='/contact' component={Contact} /> */}
        <Route path='/aboutme' component={About} />
    </Switch>
)

export default Main;
