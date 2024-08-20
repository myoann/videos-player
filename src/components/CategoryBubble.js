import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryBubble extends Component {
  state = { categoryHovered: null };

  onHover = (id) => {
    this.setState({ categoryHovered: id });
  };

  render() {
    const { categoryId, image, name, onSelectCategory } = this.props;
    const { categoryHovered } = this.state;

    let hasInactiveClass = true;
    if (categoryHovered !== null) {
      hasInactiveClass = categoryHovered !== categoryId;
    }

    return (
      <button
        className={`category fadeIn ${hasInactiveClass ? 'inactive' : ''}`}
        onMouseOver={() => this.onHover(categoryId)}
        onFocus={() => this.onHover(categoryId)}
        onMouseOut={() => this.onHover()}
        onBlur={() => this.onHover()}
        onClick={() => onSelectCategory(categoryId)}
      >
        <span className="categoryImage">
          <img src={image} alt={`categorie ${name}`} />
        </span>
        <span className="categoryName">{name}</span>
      </button>
    );
  }
}

CategoryBubble.propTypes = {
  categoryId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};
