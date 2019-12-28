import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  apnea: 'https://www.youtube.com/embed/zyg1bjZ-0MM',
  mai: 'https://www.youtube.com/embed/7iFUtgy-YtY',
  cute: 'https://www.youtube.com/embed/fl5yVYJWDcY',
  dasein: 'https://www.youtube.com/embed/XAg4VHP0Eic'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      src: VIDEOS.apnea
    };
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }
  render() {
    return (
      <div>
        <h1>Z4 Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);