import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFilterCategory, setFilterCategory } from '../../../../../store/reducers/relicsReducers';
import './CategoryItem.scss';

export default function CategoryItem({image,imageColor,name,id}) {

    const [selected,setSelected]=useState(false);
    const {filter}=useSelector(state=>state.relics);
    const dispatch=useDispatch();
    const handleClickCategoryItem=(e)=>{
        const id=e.target.getAttribute("data-id")*1;
        console.log(id);
        if(filter.category.includes(id)){   
          dispatch(removeFilterCategory(id));
        }
        else{
          dispatch(setFilterCategory(id));
        }

        setSelected(!selected);
        
    }
  return (
    <div className={`categoryItem ${selected?"categoryItem-selected":""}`} data-id={id} onClick={handleClickCategoryItem}>
        <div className="categoryItem__image">
            <img src={imageColor} alt="" />
        </div>
        
        <span className='categoryItem__name'>{name}</span>
    </div>
  )
}
