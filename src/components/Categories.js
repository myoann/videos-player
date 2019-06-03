import React, { Component } from 'react';
import './Categories.css';

import CategoryDetails from './CategoryDetails';

export class Categories extends Component {
  state = { categoryHovered: null, categorySelected: null }

  onHover = (key) => {
    this.setState({ categoryHovered: key })
  }

  onSelectCategory = (key) => {
    this.setState({ categorySelected: key })
  }

  renderCategories = (categories, categoryHovered) =>
    <div>
      <div className='selectCategory'>Sélectionner une catégorie</div>
      <div className='categories'>
        {categories.map(({ name, image }, key) =>
          <div
            className={`category fadeIn ${categoryHovered !== null && categoryHovered !== key ? 'inactive' : ''}`}
            onMouseOver={() => this.onHover(key)}
            onMouseOut={() => this.onHover()}
            onClick={() => this.onSelectCategory(key)}
          >
            <span className='categoryImage' ><img src={image} alt={`categorie ${name}`}/></span>
            <span className='categoryName'>{name}</span>
          </div>
        )}
      </div>
    </div>

  render = () => {
    const { categories } = this.props;
    const { categoryHovered, categorySelected } = this.state;
    console.log("category hovered ", categoryHovered)
    console.log("category selected ", categorySelected)

    return (
       categorySelected ?
        <CategoryDetails category={categories[categorySelected] }/> :
        this.renderCategories(categories, categoryHovered)
    );
  }
}

export default Categories;
