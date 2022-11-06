import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../assets/imgs/news/activity1.png';
import img2 from '../../../assets/imgs/news/activity2.png';
import img3 from '../../../assets/imgs/news/activity3.png';
import img4 from '../../../assets/imgs/news/activity4.png';
import img5 from '../../../assets/imgs/news/activity5.png';
import img6 from '../../../assets/imgs/news/activity6.png';
import img7 from '../../../assets/imgs/news/activity7.png';
import img8 from '../../../assets/imgs/news/activity8.png';
import img9 from '../../../assets/imgs/news/activity9.png';
import NewsItem from '../../../components/NewsItem/NewsItem';
import ShowMore from '../../../components/ShowMore/ShowMore';
import './ActivityNews.scss';
SwiperCore.use([Pagination, Autoplay]);
export default function ActivityNews() {
    const [isMore, setIsMore] = useState(false);
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/news/activity');
    };
    return (
        <div className='activityNews'>
            <div className="activityNews__slider" data-aos="flip-left">
                <Swiper
                    grabCursor={true}
                    pagination={{
                        el: '.activityNews__slider .dot',
                        clickable: 'true'
                    }}
                    autoplay={{
                        delay: 3000
                    }}
                    paginationClickable={true}
                >
                    <SwiperSlide>
                        <div className="activityItem" onClick={handleRedirect}>
                            <div className="img">
                                <img src={img1} alt="background" />
                            </div>
                            <div className="content">
                                <div className="date">
                                    Ngày 28/07/2022
                                </div>
                                <div className="text">
                                    <div className="main">
                                        Đại hội Đoàn viên Đoàn TNCS Hồ Chí Minh Chi đoàn Di tích và Dự án, nhiệm kỳ 2019-2022
                                    </div>
                                    <div className="sub">
                                        Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="activityItem" onClick={handleRedirect}>
                            <div className="img">
                                <img src={img2} alt="background" />
                            </div>
                            <div className="content">
                                <div className="date">
                                    Ngày 28/07/2022
                                </div>
                                <div className="text">
                                    <div className="main">
                                        Đại hội Đoàn viên Đoàn TNCS Hồ Chí Minh Chi đoàn Di tích và Dự án, nhiệm kỳ 2019-2022
                                    </div>
                                    <div className="sub">
                                        Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="activityItem" onClick={handleRedirect}>
                            <div className="img">
                                <img src={img3} alt="background" />
                            </div>
                            <div className="content">
                                <div className="date">
                                    Ngày 28/07/2022
                                </div>
                                <div className="text">
                                    <div className="main">
                                        Đại hội Đoàn viên Đoàn TNCS Hồ Chí Minh Chi đoàn Di tích và Dự án, nhiệm kỳ 2019-2022
                                    </div>
                                    <div className="sub">
                                        Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="dot">

                </div>
            </div>
            <div className="activityNews__container">
                <NewsItem src={img4} gap={46} extraText="Ngày 28/07/2022" main="THÔNG BÁO KẾT QUẢ XÉT TUYỂN VIÊN CHỨC NĂM 2021" sub="Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh." redirect="/news/activity" />
                <NewsItem src={img5} gap={46} extraText="Ngày 28/07/2022" main="THÔNG BÁO TRIỆU TẬP THÍ SINH THAM DỰ VÒNG 2 XÉT TUYỂN VIÊN CHỨC NĂM 2021" sub="Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh." />
                <NewsItem src={img6} gap={46} extraText="Ngày 28/07/2022" main="THÔNG BÁO KẾT QUẢ XÉT TUYỂN VIÊN CHỨC NĂM 2021" sub="Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh." redirect="/news/activity" />
                <NewsItem src={img7} gap={46} extraText="Ngày 28/07/2022" main="THÔNG BÁO TRIỆU TẬP THÍ SINH THAM DỰ VÒNG 2 XÉT TUYỂN VIÊN CHỨC NĂM 2021" sub="Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh." redirect="/news/activity" />
                {
                    isMore &&
                    <>
                        <NewsItem src={img8} gap={46} extraText="Ngày 28/07/2022" main="THÔNG BÁO KẾT QUẢ XÉT TUYỂN VIÊN CHỨC NĂM 2021" sub="Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh." redirect="/news/activity" />
                        <NewsItem src={img9} gap={46} extraText="Ngày 28/07/2022" main="THÔNG BÁO TRIỆU TẬP THÍ SINH THAM DỰ VÒNG 2 XÉT TUYỂN VIÊN CHỨC NĂM 2021" sub="Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi, Quận 1, Thành phố Hồ Chí Minh." redirect="/news/activity" />
                    </>
                }
                <ShowMore setIsMore={setIsMore} isMore={isMore}></ShowMore>
            </div>
        </div>
    );
}
