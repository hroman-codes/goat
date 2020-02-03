import React, { Component } from 'react';
import { render } from '@testing-library/react';

class Music extends React.Component {
    // initialize the state aka create a new instance of the Parent Class 
    constructor(props) {
        // call and bind the methods from the parent class 
        super(props);
        this.state = {
            play: false,
            pause: true
        }
        this.url = 'https://ia600607.us.archive.org/18/items/KnightRiderThemeSongIntroInstrumentalOriginalStuPhillips/Knight%20Rider%20Theme%20Song%20%28Intro%20Instrumental-Original%29%20-%20Stu%20Phillips.mp3';
        this.audio = new Audio(this.url);
    }
    
    // create the play function 
    play = () => {
        this.setState ({
            play: true,
            pause: false
        })
        this.audio.play()
            // add play event listener
    this.audio.addEventListener('play', () => {
        this.setState({
            play: true,
            pause: false
        });
    });
    }

    // create the pause function
    pause = () => {
        this.setState({
            play: false,
            pause: true
        })
        this.audio.pause()
           // add pause event listner
    this.audio.addEventListener('pause', () => {
        this.setState({
            play: false,
            pause: true
        });
    });
    }

    // add play event listener
    // this.audio.addEventListener('play', () => {
    //     this.setState({
    //         play: true,
    //         pause: false
    //     });
    // });

    // add pause event listner
    // this.audio.addEventListener('pause', () => {
    //     this.setState({
    //         play: false,
    //         pause: true
    //     });
    // });

    // render some JSX
    render() {
        return (
            <div>
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </div>
        );
    }
}

export default Music;

