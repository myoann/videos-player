import Category1Poster from './images/category_1.jpg';
import Category2Poster from './images/category_2.jpg';
import Category3Poster from './images/category_3.jpg';
import Category4Poster from './images/category_4.jpg';

import Elem1Poster from './images/elem_1.jpg';
import Elem2Poster from './images/elem_2.jpg';
import Elem3Poster from './images/elem_3.jpg';
import Elem4Poster from './images/elem_4.jpg';
import Elem5Poster from './images/elem_5.jpg';
import Elem6Poster from './images/elem_6.jpg';

import Elem1Video from './videos/elem_1.mp4';
import Elem2Video from './videos/elem_2.mp4';
import Elem3Video from './videos/elem_3.mp4';
import Elem4Video from './videos/elem_4.mp4';
import Elem5Video from './videos/elem_5.mp4';
import Elem6Video from './videos/elem_6.mp4';

export const elems = [
  {
    name: 'Jean Roch',
    duration: '01:10',
    poster: Elem1Poster,
    video: Elem1Video,
  },
  {
    name: 'Jean Michel Jarre',
    duration: '10:00',
    poster: Elem2Poster,
    video: Elem2Video,
  },
  {
    name: 'Stromae',
    duration: '05:41',
    poster: Elem3Poster,
    video: Elem3Video,
  },
  {
    name: 'Jean Roch',
    duration: '01:10',
    poster: Elem4Poster,
    video: Elem4Video,
  },
  {
    name: 'Jean Michel Jarre',
    duration: '10:00',
    poster: Elem5Poster,
    video: Elem5Video,
  },
  {
    name: 'Stromae',
    duration: '05:41',
    poster: Elem6Poster,
    video: Elem6Video,
  },
];

export const categories = [
  {
    name: 'Alpha',
    image: Category1Poster,
    elems,
  },
  {
    name: 'Beta',
    image: Category2Poster,
    elems,
  },
  {
    name: 'Gamma',
    image: Category3Poster,
    elems,
  },
  {
    name: 'Epsilon',
    image: Category4Poster,
    elems,
  },
];
