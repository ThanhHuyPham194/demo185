import React, { useState } from 'react';
import ShowMore from '../../../components/ShowMore/ShowMore';
import img1 from '../../../assets/imgs/news/relics1.png';
import img2 from '../../../assets/imgs/news/relics2.png';
import img3 from '../../../assets/imgs/news/relics3.png';
import img4 from '../../../assets/imgs/news/relics4.png';
import img5 from '../../../assets/imgs/news/relics5.png';
import img6 from '../../../assets/imgs/news/relics6.png';
import img7 from '../../../assets/imgs/news/relics7.png';
import img8 from '../../../assets/imgs/news/relics8.png';
import img9 from '../../../assets/imgs/news/relics9.png';
import './RelicsNews.scss';
import NewsItem from '../../../components/NewsItem/NewsItem';
export default function RelicsNews() {
    const [isMore, setIsMore] = useState(false);
    return (

        <div className="relicsNews">
            <div className="relicsNews__main">
                <NewsItem src={img1} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Ngày 13/6/2019, Sở Văn hóa và Thể thao phối hợp với Quận ủy - Ủy ban nhân dân Quận 9 chủ trì, tổ chức Tọa đàm khoa học di tích lịch sử Đình Thái Bình. Tọa đàm diễn ra tại Hội trường Ủy ban nhân dân phường Long Bình, Quận 9" top={50} gap={16} vecto redirect="/news/relics" >
                    <div className="overlayImg">
                        <img src={img9} alt="" />
                    </div>
                </NewsItem>
            </div>
            <div className="relicsNews__wrapper">
                <NewsItem src={img2}
                    main="Lễ hội Nghinh Ông huyện Cần Giờ,
                Thành phố Hồ Chí Minh năm 2017" sub="Ngày 13/6/2019, Sở Văn hóa và Thể thao phối hợp với Quận ủy - Ủy ban nhân dân Quận 9 chủ trì, tổ chức Tọa đàm khoa học di tích lịch sử Đình Thái Bình. Tọa đàm diễn ra tại Hội trường Ủy ban nhân dân phường Long Bình, Quận 9" gap={24} redirect="/news/relics" />
                <NewsItem src={img3} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Nhân dịp kỷ niệm 47 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4/1975 – 30/4/2022) , Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh phối hợp với Bảo tàng Mỹ thuật Việt Nam tổ chức trưng bày chuyên đề “Ký họa kháng chiến miền Nam” từ ngày 26/4/2022 - 8/5/2022 tại Bảo tàng Mỹ thuật Việt Nam (số 66 Nguyễn Thái Học, Hà Nội)." gap={24} redirect="/news/relics" />
                <NewsItem src={img4} main="Hội thảo Khoa học “Quản lý và khai thác di sản văn hoá trong thời kỳ hội nhập" sub="Ngày 13/6/2019, Sở Văn hóa và Thể thao phối hợp với Quận ủy - Ủy ban nhân dân Quận 9 chủ trì, tổ chức Tọa đàm khoa học di tích lịch sử Đình Thái Bình. Tọa đàm diễn ra tại Hội trường Ủy ban nhân dân phường Long Bình, Quận 9" gap={24} redirect="/news/relics" />
                <NewsItem src={img5} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Nhân dịp kỷ niệm 47 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4/1975 – 30/4/2022) , Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh phối hợp với Bảo tàng Mỹ thuật Việt Nam tổ chức trưng bày chuyên đề “Ký họa kháng chiến miền Nam” từ ngày 26/4/2022 - 8/5/2022 tại Bảo tàng Mỹ thuật Việt Nam (số 66 Nguyễn Thái Học, Hà Nội)." gap={24} redirect="/news/relics" />
                {isMore &&
                    <>
                        <NewsItem src={img6} main="Hội thảo Khoa học “Quản lý và khai thác di sản văn hoá trong thời kỳ hội nhập" sub="Ngày 13/6/2019, Sở Văn hóa và Thể thao phối hợp với Quận ủy - Ủy ban nhân dân Quận 9 chủ trì, tổ chức Tọa đàm khoa học di tích lịch sử Đình Thái Bình. Tọa đàm diễn ra tại Hội trường Ủy ban nhân dân phường Long Bình, Quận 9" gap={24} redirect="/news/relics" />
                        <NewsItem src={img7} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Nhân dịp kỷ niệm 47 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4/1975 – 30/4/2022) , Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh phối hợp với Bảo tàng Mỹ thuật Việt Nam tổ chức trưng bày chuyên đề “Ký họa kháng chiến miền Nam” từ ngày 26/4/2022 - 8/5/2022 tại Bảo tàng Mỹ thuật Việt Nam (số 66 Nguyễn Thái Học, Hà Nội)." gap={24} redirect="/news/relics" />
                        <NewsItem src={img8} main="Lễ hội Nghinh Ông huyện Cần Giờ,
                                            Thành phố Hồ Chí Minh năm 2017" sub="Ngày 13/6/2019, Sở Văn hóa và Thể thao phối hợp với Quận ủy - Ủy ban nhân dân Quận 9 chủ trì, tổ chức Tọa đàm khoa học di tích lịch sử Đình Thái Bình. Tọa đàm diễn ra tại Hội trường Ủy ban nhân dân phường Long Bình, Quận 9" gap={24} redirect="/news/relics" />
                        <NewsItem src={img9} main="Toạ đàm khoa học Di tích lịch sử đình thái bình" sub="Nhân dịp kỷ niệm 47 năm Ngày Giải phóng miền Nam, thống nhất đất nước (30/4/1975 – 30/4/2022) , Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh phối hợp với Bảo tàng Mỹ thuật Việt Nam tổ chức trưng bày chuyên đề “Ký họa kháng chiến miền Nam” từ ngày 26/4/2022 - 8/5/2022 tại Bảo tàng Mỹ thuật Việt Nam (số 66 Nguyễn Thái Học, Hà Nội)." gap={24} redirect="/news/relics" />
                    </>
                }
            </div>
            <ShowMore setIsMore={setIsMore} isMore={isMore}></ShowMore>
        </div>

    );
}
