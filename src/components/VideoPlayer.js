import React, { Component } from 'react';

import './VideoPlayer.css';

export class VideoPlayer extends Component {
  state = { isVideoToClose: false }

  handleClickElem = () =>  {
    const { handleClick } = this.props;

    this.setState({ isVideoToClose: true });
    setTimeout(() => { handleClick(null); }, 1000);
  }

  render = () => {
    const { poster, video } = this.props;
    const { isVideoToClose } = this.state;

    return (
      <div className={`${isVideoToClose ? 'out' : 'videoActivated'} modalContainer`}>
        <div className='modalBackground'>
          <div onClick={() => this.handleClickElem()} className="clickMe"/>
          <video controls autoplay width="50%" poster={poster} >
            <source src={video} type="video/mp4" />

            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
