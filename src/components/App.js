import React from 'react';
import './App.css';

import WakaWakaPoster from '../assets/images/waka_waka.png';
import VideoPlayer from './VideoPlayer';
import Categories from './Categories';

const elems = [
  {
    name: 'Jean Roch',
    duration: '01:10'
  },
  {
    name: 'Jean Michel Jarre',
    duration: '10:00'
  },
  {
    name: 'Stromae',
    duration: '05:41'
  },
  {
    name: 'Jean Roch',
    duration: '01:10'
  },
  {
    name: 'Jean Michel Jarre',
    duration: '10:00'
  },
  {
    name: 'Stromae',
    duration: '05:41'
  }
];

const categories = [
  {
    name: 'Alpha',
    image: WakaWakaPoster,
    elems
  },
  {
    name: 'Beta',
    image: WakaWakaPoster,
    elems
  },
  {
    name: 'Gamma',
    image: WakaWakaPoster,
    elems
  },
  {
    name: 'Epsilon',
    image: WakaWakaPoster,
    elems
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
