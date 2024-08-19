import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Categories from './Categories';
import VideoPlayer from './VideoPlayer';

import './CategoryDetails.css';

export class CategoryDetails extends Component {
  state = {
    isReturnClicked: false,
    elementKeyClicked: null,
  };

  handleClick = (key) => {
    this.setState({ elementKeyClicked: key });
  };

  render = () => {
    const { category } = this.props;
    const { name, image, elems } = category || {};
    const { isReturnClicked, elementKeyClicked } = this.state;

    return isReturnClicked ? (
      <Categories />
    ) : (
      <Fragment>
        <div className="categoryBackground">
          <img src={image} alt="background" />
          <button
            className="returnToCategoriesButton"
            onClick={() => this.setState({ isReturnClicked: !isReturnClicked })}
          >
            &#x2190; Retour
          </button>
          <span className="categoryTitle">{name}</span>
        </div>

        <span className="categoryDetails">
          <span className="categoryElements">
            {elems.map(({ name, duration }, key) => (
              <button
                key={key}
                className="categoryElement"
                onClick={() => this.handleClick(key)}
              >
                <span className="categoryElementName">{name}</span>
                <span className="categoryElementDuration">{duration}</span>
              </button>
            ))}
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
  };
}

CategoryDetails.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    elems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        poster: PropTypes.string,
        video: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default CategoryDetails;
