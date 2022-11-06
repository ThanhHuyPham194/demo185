import React from 'react'
import './RelicsFilter.scss';
import RelicsFilterAddress from './RelicsFilterAddress/RelicsFilterAddress';
import RelicsFilterSearch from './RelicsFilterSearch/RelicsFilterSearch';
import RelicsFilterSort from './RelicsFilterSort/RelicsFilterSort';

export default function RelicsFilter() {
  return (
    <div className='relicsFilter'>
        <RelicsFilterAddress/>
        <RelicsFilterSearch/>
        <RelicsFilterSort/>
    </div>
  )
}
