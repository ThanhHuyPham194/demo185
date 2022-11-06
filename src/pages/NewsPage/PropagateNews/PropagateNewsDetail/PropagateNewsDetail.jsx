import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../../assets/imgs/news/propagate10.png';
import img10 from '../../../../assets/imgs/news/propagate10.png';
import img2 from '../../../../assets/imgs/news/propagate2.png';
import img3 from '../../../../assets/imgs/news/propagate3.png';
import img4 from '../../../../assets/imgs/news/propagate4.png';
import img5 from '../../../../assets/imgs/news/propagate5.png';
import img7 from '../../../../assets/imgs/news/propagate7.png';
import img8 from '../../../../assets/imgs/news/propagate8.png';
import img9 from '../../../../assets/imgs/news/propagate9.png';
import Footer from '../../../../components/Footer/Footer';
import NewsItem from '../../../../components/NewsItem/NewsItem';
import Tabs from '../../../../components/Tabs/Tabs';
import './PropagateNewsDetail.scss';
SwiperCore.use([Navigation]);
export default function PropagateNewsDetail() {
    let search = window.location.pathname;
    let type = search.slice(6);
    return (
        <div className='propagateNewsDetail'>
            <div className="propagateNewsDetail__title">
                <h2 className="title">
                    Tin tức
                </h2>
            </div>
            <div className="propagateNewsDetail__tabs">
                <Tabs type={type} isDetail />
            </div>
            <div className="propagateNewsDetail__wrapper">
                <h3>
                    Đại hội Đoàn viên Đoàn TNCS Hồ Chí Minh Chi đoàn Di tích và Dự án, nhiệm kỳ 2019-2022 tại Trung tâm Bảo tồn di tích thành phố
                </h3>
                <div className="date">
                    Ngày đăng: 09/09/2022
                </div>
                <h4 className='--mt'>Ngày 17/7/2019, Chi đoàn Di tích và Dự án tổ chức Đại hội Đoàn viên Đoàn TNCS Hồ Chí Minh nhiệm kỳ 2019-2022 tại Trung tâm Bảo tồn di tích thành phố, địa chỉ số 32 Huỳnh Đình Hai, Phường 24, quận Bình Thạnh, Thành phố Hồ Chí Minh
                </h4>
                <div className="mainImg --mt">
                    <img src={img1} alt="" />
                </div>
                <p className="text --mt">
                    Đến tham dự Đại hội có các đại biểu khách mời: đồng chí Nguyễn Thị Hoài Phượng - Ủy viên Ban Thường vụ Đoàn Khối Dân - Chính - Đảng Thành phố, Bí thư Đoàn Sở Văn hóa và Thể thao Thành phố Hồ Chí Minh; đồng chí Nguyễn Thị Thúy Hường - Phó Bí thư Chi bộ, Phó Giám đốc Trung tâm Bảo tồn di tích thành phố; đồng chí Nguyễn Thị Thúy Nhi - Phó Chủ tịch Công đoàn CSTV Trung tâm Bảo tồn di tích thành phố; và đại diện Ban chấp hành các Chi đoàn: Bảo tàng Thành phố Hồ Chí Minh; Bảo tàng Chứng tích Chiến tranh; Bảo tàng Phụ nữ Nam Bộ, cùng toàn thể đoàn viên Chi đoàn Di tích và Dự án.
                </p>
                <p className="text --mt">
                    Đại hội đã tập trung đánh giá kết quả thực hiện Nghị quyết Đại hội Chi đoàn nhiệm kỳ 2017-2019 và đề ra phương hướng hoạt động Đoàn và phong trào thanh niên của Chi đoàn nhiệm kỳ 2019-2022. Đại hội đã thảo luận, thống nhất cao các chỉ tiêu, nhiệm vụ và giải pháp thực hiện trong nhiệm kỳ 2019-2022.
                </p>
                <div className="imgWrapper --mt">
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
                <p className="text --mt">Đại hội kết thúc trong không khí phấn khởi, vui tươi, hứa hẹn công tác Đoàn và phong trào thanh niên Chi đoàn nhiệm kỳ tới sẽ phát huy hơn nữa vai trò xung kích của đội ngũ đoàn viên thanh niên trong các hoạt động, tiếp tục đạt được nhiều kết quả tốt đẹp, luôn là Chi đoàn vững mạnh.</p>
            </div>
            <div className="propagateNewsDetail__relative">
                <div className="container">
                    <div className="propagateNewsDetail__relative--paginate">
                        <div className="name">Trang tin khác</div>
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
                    <div className="propagateNewsDetail__relative--slider">
                        <Swiper
                            spaceBetween={44}
                            slidesPerView={3}
                            loop={true}
                            navigation={{
                                nextEl: '.propagateNewsDetail__relative--paginate .--next',
                                prevEl: '.propagateNewsDetail__relative--paginate .--prev',
                            }}
                        >
                            <SwiperSlide>
                                <NewsItem gap={12} src={img4} main="Toạ đàm khoa học Di tích lịch sử đình thái bình hihi" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={img5} main="Lễ hội Nghinh Ông huyện Cần Giờ, Thành phố Hồ Chí Minh năm 2017" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={img7} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={img8} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={img9} main="Lễ hội Nghinh Ông huyện Cần Giờ, Thành phố Hồ Chí Minh năm 2017" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={img10} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <Footer />
                </div>
            </div>
        </div >

    );
}

