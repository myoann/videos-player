import React, { Component, Fragment } from 'react';

import './CategoryDetails.css';
import Categories from './Categories';
import VideoPlayer from './VideoPlayer';

export class CategoryDetails extends Component {
  state = {
    isReturnClicked: false,
    elementKeyClicked: null
  }

  handleClick = key => { this.setState({ elementKeyClicked: key }); }


  render = () => {
    const { category } = this.props;
    const { name, image, elems } =  category || {};
    const { isReturnClicked, elementKeyClicked } = this.state;

    return (
        isReturnClicked ?
          <Categories /> :
            <Fragment>
              <div className='categoryBackground'>
                <img src={image} alt='background' />
                <span className='returnToCategoriesButton' onClick={() => this.setState({ isReturnClicked: !isReturnClicked })}>&#x2190; Retour</span>
                <span className='categoryTitle'>{name}</span>
              </div>


              <span className='categoryDetails'>
                <span className='categoryElements'>
                      {elems.map(({name, duration}, key) =>
                          <div key={key} className='categoryElement' onClick={() => this.handleClick(key)}>
                              <span className='categoryElementName'>{name}</span>
                              <span className='categoryElementDuration'>{duration}</span>
                          </div>
                      )}
                </span>
              </span>

              {elementKeyClicked !== null && (
                <VideoPlayer
                  handleClick={this.handleClick}
                  category={category}
                  name={elems[elementKeyClicked].name}
                  poster={elems[elementKeyClicked].poster}
                  video={elems[elementKeyClicked].video}
                />
              )}

            </Fragment>
    );
  }
}

export default CategoryDetails;
