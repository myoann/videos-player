import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryBubble extends Component {
  state = { categoryHovered: null };

  onHover = (key) => {
    this.setState({ categoryHovered: key });
  };

  render() {
    const { categoryKey, image, name, onSelectCategory } = this.props;
    const { categoryHovered } = this.state;

    return (
      <div
        className={`category fadeIn ${categoryHovered !== null ? (categoryHovered !== categoryKey ? 'inactive' : '') : 'inactive'}`}
        onMouseOver={() => this.onHover(categoryKey)}
        onMouseOut={() => this.onHover()}
        onClick={() => onSelectCategory(categoryKey)}
      >
        <span className="categoryImage">
          <img src={image} alt={`categorie ${name}`} />
        </span>
        <span className="categoryName">{name}</span>
      </div>
    );
  }
}

CategoryBubble.propTypes = {
  categoryKey: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};
