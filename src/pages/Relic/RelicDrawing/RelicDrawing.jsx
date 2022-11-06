import React from 'react';
import "./RelicDrawing.scss";
import RelicDrawingList from './RelicDrawingList/RelicDrawingList';

export default function RelicDrawing() {
    return (
        <div
            className="relicDrawing"
            data-aos="fade-up"
        >
            <h2 className='relicDrawing__title'>Bản vẽ</h2>
            <RelicDrawingList />
        </div>
    );
}
