import React from 'react';
import './App.css';

import Category1Poster from '../assets/images/category_1.jpg';
import Category2Poster from '../assets/images/category_2.jpg';
import Category3Poster from '../assets/images/category_3.jpg';
import Category4Poster from '../assets/images/category_4.jpg';

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
    image: Category1Poster,
    elems
  },
  {
    name: 'Beta',
    image: Category2Poster,
    elems
  },
  {
    name: 'Gamma',
    image: Category3Poster,
    elems
  },
  {
    name: 'Epsilon',
    image: Category4Poster,
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
