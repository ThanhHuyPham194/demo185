import React from 'react';
import activity1 from '../../assets/imgs/news/activity1.png';
import activity2 from '../../assets/imgs/news/activity2.png';
import activity3 from '../../assets/imgs/news/activity3.png';
import activity4 from '../../assets/imgs/news/activity4.png';
import activity5 from '../../assets/imgs/news/activity5.png';
import activity6 from '../../assets/imgs/news/activity6.png';
import activity7 from '../../assets/imgs/news/activity7.png';
import activity8 from '../../assets/imgs/news/activity8.png';
import activity9 from '../../assets/imgs/news/activity9.png';
import relics1 from '../../assets/imgs/news/relics1.png';
import relics2 from '../../assets/imgs/news/relics2.png';
import relics3 from '../../assets/imgs/news/relics3.png';
import relics4 from '../../assets/imgs/news/relics4.png';
import relics5 from '../../assets/imgs/news/relics5.png';
import relics6 from '../../assets/imgs/news/relics6.png';
import relics7 from '../../assets/imgs/news/relics7.png';
import relics8 from '../../assets/imgs/news/relics8.png';
import relics9 from '../../assets/imgs/news/relics9.png';
import NewsItem from '../../components/NewsItem/NewsItem';
import Tabs from '../../components/Tabs/Tabs';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './DetailPage.scss';
SwiperCore.use([Navigation]);
export default function DetailPage() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let type = params.get('type');
    return (
        <div className='detailPage'>
            <div className="detailPage__title">
                <h2 className="title">
                    Tin tức
                </h2>
            </div>
            <div className="detailPage__tabs">
                <Tabs type={type} isDetail />
            </div>
            <div className="detailPage__wrapper">
                <h3>
                    Đại hội Đoàn viên Đoàn TNCS Hồ Chí Minh Chi đoàn Di tích và Dự án, nhiệm kỳ 2019-2022 tại Trung tâm Bảo tồn di tích thành phố
                </h3>
                <div className="date">
                    Ngày đăng: 09/09/2022
                </div>
                <h4 className='--mt'>Ngày 17/7/2019, Chi đoàn Di tích và Dự án tổ chức Đại hội Đoàn viên Đoàn TNCS Hồ Chí Minh nhiệm kỳ 2019-2022 tại Trung tâm Bảo tồn di tích thành phố, địa chỉ số 32 Huỳnh Đình Hai, Phường 24, quận Bình Thạnh, Thành phố Hồ Chí Minh
                </h4>
                <div className="mainImg --mt">
                    <img src={type === 'relics' ? relics4 : activity1} alt="" />
                </div>
                <p className="text --mt">
                    Đến tham dự Đại hội có các đại biểu khách mời: đồng chí Nguyễn Thị Hoài Phượng - Ủy viên Ban Thường vụ Đoàn Khối Dân - Chính - Đảng Thành phố, Bí thư Đoàn Sở Văn hóa và Thể thao Thành phố Hồ Chí Minh; đồng chí Nguyễn Thị Thúy Hường - Phó Bí thư Chi bộ, Phó Giám đốc Trung tâm Bảo tồn di tích thành phố; đồng chí Nguyễn Thị Thúy Nhi - Phó Chủ tịch Công đoàn CSTV Trung tâm Bảo tồn di tích thành phố; và đại diện Ban chấp hành các Chi đoàn: Bảo tàng Thành phố Hồ Chí Minh; Bảo tàng Chứng tích Chiến tranh; Bảo tàng Phụ nữ Nam Bộ, cùng toàn thể đoàn viên Chi đoàn Di tích và Dự án.
                </p>
                <p className="text --mt">
                    Đại hội đã tập trung đánh giá kết quả thực hiện Nghị quyết Đại hội Chi đoàn nhiệm kỳ 2017-2019 và đề ra phương hướng hoạt động Đoàn và phong trào thanh niên của Chi đoàn nhiệm kỳ 2019-2022. Đại hội đã thảo luận, thống nhất cao các chỉ tiêu, nhiệm vụ và giải pháp thực hiện trong nhiệm kỳ 2019-2022.
                </p>
                <div className="imgWrapper --mt">
                    <img src={type === 'relics' ? relics2 : activity2} alt="" />
                    <img src={type === 'relics' ? relics3 : activity3} alt="" />
                </div>
                <p className="text --mt">Đại hội kết thúc trong không khí phấn khởi, vui tươi, hứa hẹn công tác Đoàn và phong trào thanh niên Chi đoàn nhiệm kỳ tới sẽ phát huy hơn nữa vai trò xung kích của đội ngũ đoàn viên thanh niên trong các hoạt động, tiếp tục đạt được nhiều kết quả tốt đẹp, luôn là Chi đoàn vững mạnh.</p>
            </div>
            <div className="detailPage__relative">
                <div className="container">
                    <div className="detailPage__relative--paginate">
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
                    <div className="detailPage__relative--slider">
                        <Swiper
                            spaceBetween={44}
                            slidesPerView={3}
                            loop={true}
                            navigation={{
                                nextEl: '.detailPage__relative--paginate .--next',
                                prevEl: '.detailPage__relative--paginate .--prev',
                            }}
                        >
                            <SwiperSlide>
                                <NewsItem gap={12} src={type === 'relics' ? relics1 : activity4} main="Toạ đàm khoa học Di tích lịch sử đình thái bình hihi" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={type === 'relics' ? relics5 : activity5} main="Lễ hội Nghinh Ông huyện Cần Giờ, Thành phố Hồ Chí Minh năm 2017" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={type === 'relics' ? relics6 : activity6} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={type === 'relics' ? relics7 : activity7} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={type === 'relics' ? relics8 : activity8} main="Lễ hội Nghinh Ông huyện Cần Giờ, Thành phố Hồ Chí Minh năm 2017" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsItem gap={12} src={type === 'relics' ? relics9 : activity9} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Đăng ngày: 29/07/2022" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >

    );
}
