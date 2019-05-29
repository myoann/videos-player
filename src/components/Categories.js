import React, { Component } from 'react';
import './Categories.css';

import WakaWakaPoster from '../assets/images/waka_waka.png';
import VideoPlayer from './VideoPlayer';

export class Categories extends Component {
  state = { elemHovered: null }

  onHover = (onHover) => {
    this.setState({ elemHovered: onHover })
  }

  render = () => {
    const { categories } = this.props;
    const { elemHovered } = this.state;

    console.log(elemHovered)
    console.log(categories)
    return (
        <div className='categories'>
          {categories.map(({ name, image }, key) =>
            <div
              className={`category fadeIn ${elemHovered && elemHovered !== key ? 'inactive' : ''}`}
              onMouseOver={() => this.onHover(key)}
              onMouseOut={() => this.onHover()}
            >
              <img src={image} className='categoryImage' />
              <span className='categoryName'>{name}</span>
            </div>
          )}
        </div>
    );
  }
}

export default Categories;
