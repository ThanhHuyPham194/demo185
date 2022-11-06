import React from 'react';
import CategoryList from './CategoryList/CategoryList';
import './RelicsHeading.scss';

export default function RelicsHeading() {
  return (
    <div className='relicsHeading' data-aos="fade">
      <span className="relicsHeading__text">Di tích</span>
      <CategoryList></CategoryList>
    </div>
  );
}
