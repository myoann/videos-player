import React, { Component } from 'react';

import { categories } from '../assets/categories';

import CategoryDetails from './CategoryDetails';
import CategoryBubble from './CategoryBubble';

import './Categories.css';

export class Categories extends Component {
  state = {
    selectedCategory: null,
  };

  onSelectCategory = (id) => {
    const categoryIndex = categories.findIndex(
      (category) => category.id === id
    );

    this.setState({
      selectedCategory: categories[categoryIndex],
    });
  };

  renderCategories = (categories) => (
    <div>
      <div className="selectCategory">Sélectionner une catégorie</div>
      <div className="categories">
        {categories.map(({ id, name, image }) => (
          <CategoryBubble
            name={name}
            image={image}
            key={id}
            categoryId={id}
            onSelectCategory={this.onSelectCategory}
          />
        ))}
      </div>
    </div>
  );

  render = () => {
    return this.state.selectedCategory !== null ? (
      <CategoryDetails category={this.state.selectedCategory} />
    ) : (
      this.renderCategories(categories)
    );
  };
}

export default Categories;
