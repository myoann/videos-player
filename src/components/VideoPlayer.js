import React, { Component } from 'react';

import { categories } from '../assets/categories';
import './VideoPlayer.css';
import CategoryDetails from './CategoryDetails';

export class VideoPlayer extends Component {
  state = { isReturnClicked: false };

  render = () => {
    const { category, poster, name, video } = this.props;
    const { isReturnClicked, elementKeyClicked } = this.state;

    return (
        isReturnClicked ?
          <CategoryDetails category={category}/> :
          <div>
            <div className='videoPlayerHeader'>
              <span className='returnToCategoryButton' onClick={() => this.setState({ isReturnClicked: !isReturnClicked })}>&#x2190; Retour</span>
              <span className='videoTitle'>{name}</span>
            </div>

            <video controls autoplay width="100%" poster={poster}>
              <source src={video} type="video/mp4" />

              Sorry, your browser doesn't support embedded videos.
              </video>
          </div>
    );
  }
}

export default VideoPlayer;
