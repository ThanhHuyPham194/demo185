import React from 'react';
import { Children } from 'react';
import "./RelicArtifactsList.scss";
export default function RelicArtifactsList({ children }) {
    const countChildren = Children.count(children);
    return (

        <div className='relicArtifactsList' style={{ gridTemplateColumns: `repeat(${countChildren},1fr)` }}>
            {children}
        </div>
    );
}




function GroupImage({ children }) {
    const countChildren = Children.count(children);
    return (
        <div className="relicArtifactsList__groupImage" style={{ gridTemplateColumns: `repeat(${countChildren},1fr)` }}>
            {children}
        </div>
    );
}
function ItemImage({ image }) {
    return (
        <div className="relicArtifactsList__itemImage">
            <img src={image} alt="" />
        </div>
    );

}

RelicArtifactsList.GroupImage = GroupImage;
RelicArtifactsList.ItemImage = ItemImage;
