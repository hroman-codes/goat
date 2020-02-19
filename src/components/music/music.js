import React, { Component } from 'react';

// class Music extends Component {
//     // initialize the state aka create a new instance of the Parent Class 
//     constructor(props) {
//         // call and bind the methods from the parent class 
//         super(props);
//         this.state = {
//             play: false,
//             pause: true
//         }
//         this.url = 'https://ia600607.us.archive.org/18/items/KnightRiderThemeSongIntroInstrumentalOriginalStuPhillips/Knight%20Rider%20Theme%20Song%20%28Intro%20Instrumental-Original%29%20-%20Stu%20Phillips.mp3';
//         this.audio = new Audio(this.url);
//         this.setState({
//             play: true
//         })
//     }
    
//     // create the play function 
//     play = () => {
//         this.setState ({
//             play: true,
//             pause: false
//         })
//         this.audio.play()
//             // add play event listener
//         this.audio.addEventListener('play', () => {
//             this.setState({
//                 play: true,
//                 pause: false
//             });
//         });
//     }

//     // create the pause function
//     pause = () => {
//         this.setState({
//             play: false,
//             pause: true
//         })
//         this.audio.pause()
//            // add pause event listner
//         this.audio.addEventListener('pause', () => {
//             this.setState({
//                 play: false,
//                 pause: true
//             });
//         });
//     }

//     // render some JSX
//     render() {
//         return (
//             <div>
//                 <button onClick={this.play}>Play</button>
//                 <button onClick={this.pause}>Pause</button>
//             </div>
//         );
//     }
// }

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
                     console.log('beep')
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

