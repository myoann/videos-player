import React, { Component } from 'react';
import './CategoryDetails.css';


export class CategoryDetails extends Component {

  render = () => {
    const { category: { name, image, elems } } = this.props;
    console.log("category details ", name, image)

    return (
        <div className='categoryDetails' >
          <span className='categoryDetailsImage'>
            <img src={image} alt={`categorie ${name}`}  />
          </span>
          <span className='categoryElements'>
                {elems.map(({name, duration}) =>
                    <div className='categoryElement'>
                        <span className='categoryElementName'>{name}</span>
                        <span className='categoryElementDuration'>{duration}</span>
                    </div>
                )}
          </span>
        </div>
    );
  }
}

export default CategoryDetails;
