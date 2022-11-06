import React from 'react';
import './RelicDrawingList.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import RelicDrawingItem from './RelicDrawingItem/RelicDrawingItem';
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import { relicsDrawing } from '../../constants/constants';
export default function RelicDrawingList() {
    return (
        <div className='relicDrawingList'>
            <Swiper
                scrollbar={{ hide: true }}
                modules={[Scrollbar]}
                slidesPerView={4}
                grabCursor
                spaceBetween={18}
                preventClicks={true}
                a11y={false}
            >
                {relicsDrawing.map((relicDrawing) => {
                    return <SwiperSlide key={relicDrawing.id}>
                        <RelicDrawingItem relicDrawing={relicDrawing}></RelicDrawingItem>
                    </SwiperSlide>;
                })}
            </Swiper>
        </div>
    );
}
