import React from 'react';
import './App.css';

import WakaWakaPoster from '../assets/images/waka_waka.png';
import VideoPlayer from './VideoPlayer';
import Categories from './Categories';

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
        <Categories categories={categories} />
      </header>
    </div>
  );
}

export default App;
