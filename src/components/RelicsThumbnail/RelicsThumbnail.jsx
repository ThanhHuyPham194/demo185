import React from 'react';
import './RelicsThumbnail.scss';

export default function RelicsThumbnail({ src, street, name, id, onClick }) {
    return (
        <div className='relics-thumbnail' onClick={() => onClick(id)}>
            <div className="img">
                <img src={src} alt="relics_thumbnail" />
            </div>
            <div className="name">{name}</div>
            <div className="street">
                {street}
            </div>
        </div>
    );
}
