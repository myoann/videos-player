import React from 'react';

export default function VideoPlayer({ poster, video }) {
  return (
    <div>
        <video controls width="500" poster={poster}>
          <source src={video} type="video/mp4" />

          Sorry, your browser doesn't support embedded videos.
          </video>
    </div>
  )
}
