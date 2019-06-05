import React, { Component, Fragment } from 'react';

import './CategoryDetails2.css';
import Categories from './Categories';

const backgroundImageStyle = image => ({
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  'background-image': `url(${image})`,
  'background-position': 'center',
  'background-repeat': 'no-repeat',
  'background-size': 'cover',
  filter: 'blur(30px) grayscale(0.5)',
})

export class CategoryDetails extends Component {
  state = {
    isReturnClicked: false,
  }

  render = () => {
    const { category: { name, image, elems } } = this.props;
    const { isReturnClicked } = this.state;

    return (
        isReturnClicked ?
          <Categories /> :
          <Fragment>
            <div className='categoryBackground'>
              <img src={image} />
              <span className='returnToCategoriesButton' onClick={() => this.setState({ isReturnClicked: !isReturnClicked })}>Retour</span>
              <span className='categoryTitle'>{name}</span>
            </div>


            <span className='categoryDetails'>
              <span className='categoryElements'>
                    {elems.map(({name, duration}) =>
                        <div className='categoryElement'>
                            <span className='categoryElementName'>{name}</span>
                            <span className='categoryElementDuration'>{duration}</span>
                        </div>
                    )}
              </span>
            </span>
          </Fragment>
    );
  }
}

export default CategoryDetails;
