import React from 'react'
import './RelicContentList.scss';
import { relicContents } from '../constants/constants';
import RelicContentItem from '../RelicContentItem/RelicContentItem';


export default function RelicContentList() {
  return (
    <div className='relicContentList'>
      {relicContents && relicContents.map((relicContent)=>{
         return <RelicContentItem
         key={relicContent.id}
         title={relicContent.title}
         contents={relicContent.contents}
         contentsShowMore={relicContent.contentsShowMore}
         video={relicContent.video}
         data={relicContent.data}
         >
         </RelicContentItem>
      })}
    </div>
  )
}
