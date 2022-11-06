import React from 'react';
import NewsItem from '../../../components/NewsItem/NewsItem';
import img1 from '../../../assets/imgs/news/propagate1.png';
import img2 from '../../../assets/imgs/news/propagate2.png';
import img3 from '../../../assets/imgs/news/propagate3.png';
import img4 from '../../../assets/imgs/news/propagate4.png';
import img5 from '../../../assets/imgs/news/propagate5.png';
import img6 from '../../../assets/imgs/news/propagate6.png';
import img7 from '../../../assets/imgs/news/propagate7.png';
import img8 from '../../../assets/imgs/news/propagate8.png';
import img9 from '../../../assets/imgs/news/propagate9.png';
import './PropagateNews.scss';
import ShowMore from '../../../components/ShowMore/ShowMore';
import { useState } from 'react';
export default function PropagateNews() {
    const [isMore, setIsMore] = useState(false);
    return (
        <div className='propagateNews'>
            <div className="propagateNews__wrapper">
                <NewsItem redirect="/news/propagate" gap={24} height={469} src={img1} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                <NewsItem redirect="/news/propagate" gap={24} height={469} src={img2} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                <NewsItem redirect="/news/propagate" gap={24} height={469} src={img3} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                <NewsItem redirect="/news/propagate" gap={24} height={469} src={img4} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                <NewsItem redirect="/news/propagate" gap={24} height={469} src={img5} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                <NewsItem redirect="/news/propagate" gap={24} height={469} src={img6} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                {isMore
                    &&
                    <>
                        <NewsItem redirect="/news/propagate" gap={24} height={469} src={img7} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                        <NewsItem redirect="/news/propagate" gap={24} height={469} src={img8} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                        <NewsItem redirect="/news/propagate" gap={24} height={469} src={img9} extraText="20/09/2022" main="Trùng tu di tích Lăng Lê Văn Duyệt" sub="Chung quanh khu lăng có bức tường bao bọc dài 500m, cao 1,2 m được trổ bốn cổng ra vào theo bốn hướng, được xây dựng vào năm 1948. Năm sau, cổng Tam quan cũng được xây. " />
                    </>
                }
            </div>
            <ShowMore setIsMore={setIsMore} isMore={isMore} />
        </div>
    );
}
