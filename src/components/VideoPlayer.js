import React from 'react';

const VideoPlayer = ({ poster, video }) => (
  <div>
      <video controls autoplay width="100%" poster={poster}>
        <source src={video} type="video/mp4" />

        Sorry, your browser doesn't support embedded videos.
        </video>
  </div>
);

export default VideoPlayer;
