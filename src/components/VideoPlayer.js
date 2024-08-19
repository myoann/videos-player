import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './VideoPlayer.css';

export class VideoPlayer extends Component {
  state = { isVideoToClose: false };

  handleClickElem = () => {
    const { handleClick } = this.props;

    this.setState({ isVideoToClose: true });
    setTimeout(() => {
      handleClick(null);
    }, 1000);
  };

  render = () => {
    const { poster, video } = this.props;
    const { isVideoToClose } = this.state;

    return (
      <div
        className={`${isVideoToClose ? 'out' : 'videoActivated'} modalContainer`}
      >
        <div className="modalBackground">
          <div onClick={() => this.handleClickElem()} className="clickMe" />
          <video controls autoPlay width="50%" poster={poster}>
            <source src={video} type="video/mp4" />
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </div>
    );
  };
}

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default VideoPlayer;
