import React from 'react';
import Footer from "../../components/Footer/Footer";
import './Relics.scss';
import RelicsFilter from './RelicsFilter/RelicsFilter';
import RelicsHeading from './RelicsHeading/RelicsHeading';
import RelicsList from './RelicsList/RelicsList';

export default function Relics() {

  return (
    <div className='relicsWrapper'>
  

      <div className="container">
        <RelicsHeading />
        <RelicsFilter />
        <RelicsList />
        <Footer />
      </div>
    </div>
  );
}
