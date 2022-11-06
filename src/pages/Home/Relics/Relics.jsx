import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import relics1 from '../../../assets/imgs/relics/relics1.png';
import relics2 from '../../../assets/imgs/relics/relics2.png';
import relics3 from '../../../assets/imgs/relics/relics3.png';
import camera from '../../../assets/svg/camera.svg';
import arrow from '../../../assets/svg/vecto.svg';
import MainButton from '../../../components/MainButton/MainButton';
import Modal from '../../../components/Modal/Modal';
import './Relics.scss';
SwiperCore.use([Navigation, Pagination]);
let relicsList = [
    {
        id: 1,
        img: relics1,
        name: 'Lăng Lê Văn Duyệt',
        year: 'Năm 1848'
    },
    {
        id: 2,
        img: relics2,
        name: 'Lăng Lê Văn Duyệt',
        year: 'Năm 1848'
    },
    {
        id: 3,
        img: relics3,
        name: 'Lăng Lê Văn Duyệt',
        year: 'Năm 1848'
    },
    {
        id: 4,
        img: relics1,
        name: 'Lăng Lê Văn Duyệt',
        year: 'Năm 1848'
    },
    {
        id: 5,
        img: relics2,
        name: 'Lăng Lê Văn Duyệt',
        year: 'Năm 1848'
    },
    {
        id: 6,
        img: relics3,
        name: 'Lăng Lê Văn Duyệt',
        year: 'Năm 1848'
    },
    {
        id: 7,
        img: relics1,
        name: 'Lăng Lê Văn Duyệt',
        year: 'Năm 1848'
    },
    {
        id: 8,
        img: relics2,
        name: 'Lăng Lê Văn Duyệt',
        year: 'Năm 1848'
    },
];
export default function Relics() {
    const [currentItem, setCurrentItem] = useState(1);
    const [isModal, setIsModal] = useState(false);
    return (
        <div className='relics'>
            {isModal &&
                <Modal closeModal={() => setIsModal(false)}>
                    <div className="relics__video" onClick={(e) => e.stopPropagation()}>
                        <iframe src="https://www.youtube.com/embed/UxHGR_rrB98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Modal>
            }
            <div className="relics__title">
                <h2 className="title">Di tích</h2>
            </div>
            <div className="relics__slider">
                <Swiper
                    direction='horizontal'
                    spaceBetween={16}
                    slidesPerView={5}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    allowTouchMove={false}
                    touchRatio="0.2"
                    a11y={false}
                    navigation={
                        {
                            nextEl: '.relics__pagination .--next',
                            prevEl: '.relics__pagination .--prev',
                            clickable: true,
                        }
                    }
                    onSlideChange={(e) => setCurrentItem(e.activeIndex + 1)}
                >
                    {relicsList?.map(e => {
                        return <SwiperSlide key={e.id}>
                            <div className="relics__slider--item">
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <span> </span>
                                <div className="img">
                                    <img src={e.img} alt="img" />
                                </div>
                                <div className="content">
                                    <div className="name">{e.name}</div>
                                    <div className="year">{e.year}</div>
                                </div>
                                <div className="button" onClick={() => setIsModal(true)}>
                                    <MainButton src={camera} width={188} height={42}>Xem video</MainButton>
                                </div>
                            </div>
                        </SwiperSlide>;
                    })}
                </Swiper >
            </div >
            <div className="relics__pagination">
                <div className="page">
                    <span>{currentItem}</span>
                    <span>/</span>
                    <span>{relicsList.length}</span>
                </div>
                <div className="buttonGroup">
                    <div className="buttonRedirect --prev">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711Z" fill="white" />
                        </svg>
                    </div>
                    <div className="buttonRedirect --next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="relics__viewAll">
                <MainButton src={arrow} width={198} height={48} redirect="/relics">Xem tất cả</MainButton>
            </div>
        </div >
    );
}
