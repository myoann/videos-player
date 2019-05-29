import React from 'react';
import './App.css';

import WakaWakaVideo from '../assets/videos/waka_waka.mp4';
import WakaWakaPoster from '../assets/images/waka_waka.png';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoPlayer poster={WakaWakaPoster} video={WakaWakaVideo} />
      </header>


    </div>
  );
}

export default App;
