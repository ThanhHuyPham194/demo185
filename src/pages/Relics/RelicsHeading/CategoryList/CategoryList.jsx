import React from 'react';
import './CategoryList.scss';
import { headingCategories } from '../../constants/constants';
import CategoryItem from './CategoryItem/CategoryItem';

export default function CategoryList() {

  return (
    <div className='categoryList' data-aos="fade">
      {
        headingCategories && headingCategories.map((headingCategory) => {
          return <CategoryItem key={headingCategory.id} image={headingCategory.image} name={headingCategory.name} imageColor={headingCategory.imageColor} id={headingCategory.id}></CategoryItem>;
        })
      }
    </div>
  );
}
