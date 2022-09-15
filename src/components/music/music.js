import React, { Component } from 'react';

class Music extends Component {
    constructor(props) {
    // call and bind the methods from the parent class 
    super(props);
    this.state = {
        play: true,
        pause: false
    }
    console.log(this.currentTime);
}

    componentDidMount() {
        this.url = 'https://ia600607.us.archive.org/18/items/KnightRiderThemeSongIntroInstrumentalOriginalStuPhillips/Knight%20Rider%20Theme%20Song%20%28Intro%20Instrumental-Original%29%20-%20Stu%20Phillips.mp3';
        this.audio = new Audio(this.url);
        this.audio.load();
        this.playAudio();
    }

    playAudio() {
        const audioPromise = this.audio.play();
        if (audioPromise !== undefined) {
            audioPromise
                .then(_ => {
                     console.log('Auto Play Started! The user has interacted with the domain (click, tap, etc.).')
                })
                .catch(err => {
                    console.info(err)
                })
        }
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

    render() {
        return (
        <div>
            <button onClick={this.pause}>Pause</button>
        </div>    
        )
    }

}

export default Music;
