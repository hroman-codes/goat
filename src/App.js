import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className='headerColor' title={<Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'IBM Plex Mono'}}
            to='/'>Getroman.dev</Link>} scroll>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{ textDecoration: 'none', color: 'black'}}
            to='/'>Getroman.dev</Link>}>
                <Navigation>
                    <Link to="/aboutme">About Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
