import React, { Component } from 'react';
import './Categories.css';

import CategoryDetails from './CategoryDetails2';
import CategoryBubble from './CategoryBubble';
import { categories } from '../assets/categories';

export class Categories extends Component {
  state= {
    categorySelected: null
  }

  onSelectCategory = key =>  {
    this.setState({
      categorySelected: key
    })
  }

  renderCategories = (categories) =>
    <div>
      <div className='selectCategory'>Sélectionner une catégorie</div>
      <div className='categories'>
        {categories.map(({ name, image }, key) =>
          <CategoryBubble name={name} image={image} key={key} categoryKey={key} onSelectCategory={this.onSelectCategory}/>
        )}
      </div>
    </div>

  render = () => {
    return (
       this.state.categorySelected !== null ?
        <CategoryDetails category={categories[this.state.categorySelected]}/> :
        this.renderCategories(categories)
    );
  }
}

export default Categories;
