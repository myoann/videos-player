import React, { Component } from 'react';

import { categories } from '../assets/categories';

import CategoryDetails from './CategoryDetails';
import CategoryBubble from './CategoryBubble';

import './Categories.css';

export class Categories extends Component {
  state = {
    categorySelected: null,
  };

  onSelectCategory = (key) => {
    this.setState({
      categorySelected: key,
    });
  };

  renderCategories = (categories) => (
    <div>
      <div className="selectCategory">Sélectionner une catégorie</div>
      <div className="categories">
        {categories.map(({ name, image }, key) => (
          <CategoryBubble
            name={name}
            image={image}
            key={key}
            categoryKey={key}
            onSelectCategory={this.onSelectCategory}
          />
        ))}
      </div>
    </div>
  );

  render = () => {
    return this.state.categorySelected !== null ? (
      <CategoryDetails category={categories[this.state.categorySelected]} />
    ) : (
      this.renderCategories(categories)
    );
  };
}

export default Categories;
