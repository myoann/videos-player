import React from 'react';
import './App.css';

import WakaWakaVideo from '../assets/videos/waka_waka.mp4';
import WakaWakaPoster from '../assets/images/waka_waka.png';
import VideoPlayer from './VideoPlayer';

const categories = [
  {
    name: 'Alpha',
    image: WakaWakaPoster
  },
  {
    name: 'Beta',
    image: WakaWakaPoster
  },
  {
    name: 'Gamma',
    image: WakaWakaPoster
  },
  {
    name: 'Epsilon',
    image: WakaWakaPoster
  },
];

function App() {
  return (
    <div className="App">
    <header className="App-header">
      {/*<VideoPlayer poster={WakaWakaPoster} video={WakaWakaVideo} />*/}

      <div className='categories'>
        {categories.map(({ name, image }) =>
          <div className='category'>
            <img src={image} className='categoryImage' />
            <span className='categoryName'>{name}</span>
          </div>
        )}
      </div>
    </header>


    </div>
  );
}

export default App;
