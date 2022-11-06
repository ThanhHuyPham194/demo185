import React, { useEffect } from 'react';
import './IntroItem.scss';
import intro1 from '../../assets/imgs/intro1.png';
import intro2 from '../../assets/imgs/intro2.png';
import quote from '../../assets/svg/quotes.svg';
import { useState } from 'react';
export default function IntroItem({ isStart }) {
    const [isChecked, setIsChecked] = useState(isStart || false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let heightElement = document.querySelector('.--letter');
            if (heightElement.getBoundingClientRect().top - heightElement.offsetHeight - 300 < 0) {
                setIsChecked(true);
            }
        });
        return () => {
            window.removeEventListener('scroll', () => {
                let heightElement = document.querySelector('.--letter');
                if (heightElement.getBoundingClientRect().top - heightElement.offsetHeight - 300 < 0) {
                    setIsChecked(true);
                }
            });
        };
    }, []);
    useEffect(() => {
        let TxtRotate = function (el, toRotate, delay = 0) {
            this.toRotate = toRotate;
            this.el = el;
            this.delay = delay;
            this.txt = "";
            this.checked = isChecked;
            setTimeout(() => {
                this.tick();
            }, delay);
        };
        TxtRotate.prototype.tick = function () {
            let fullTxt = this.toRotate;
            let delta = 10;
            if (this.checked) {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
                this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
                if (this.txt === fullTxt) {
                    this.checked = false;
                    this.el.classList.add('done');
                }
                setTimeout(() => {
                    if (this.checked) {
                        this.tick();
                    }
                }, delta);
            }

        };
        if (isStart || isChecked) {
            let elements = document.getElementsByClassName("txt-rotate");
            for (let i = 0; i < elements.length; i++) {
                let toRotate = elements[i].getAttribute("data-rotate");
                let delay = elements[i].getAttribute("data-delay");
                if (toRotate) {
                    new TxtRotate(elements[i], toRotate, delay);
                }
            }
        }
    }, [isChecked]);
    return (
        <div className='intro-item'>
            <div className="intro-item__title">
                <h2 className="title">Giới thiệu</h2>
            </div>
            <div className="intro-item__img --left">
                <img src={intro1} alt="intro_image" />
            </div>
            <div className="info">
                <div className="info__title">
                    <p>trung tâm bảo tồn và phát huy</p>
                    <p>giá trị lịch sử văn hóa tphcm</p>
                </div>
                <div className="info__wrapper --letter">
                    <div className="left">
                        <p className="title">
                            Chức năng
                        </p>
                        <div className="group-text">
                            <div className="icon">
                                <img src={quote} alt="quote_svg" />
                            </div>
                            <div className='txt-rotate' data-rotate="Trung tâm Bảo tồn và phát huy giá trị di tích lịch sử- văn hóa Thành phố Hồ Chí Minh (sau đây gọi tắt là Trung tâm Bảo tồn di tích) là đơn vị sự nghiệp văn hóa trực thuộc Sở Văn hóa và Thể thao Thành phố Hồ Chí Minh, có chức năng nghiên cứu khoa học về bảo tồn và phát huy giá trị di tích lịch sử- văn hóa; sưu tầm, phát hiện, kiểm kê, phân loại, lập hồ sơ di tích trên địa bàn thành phố để đề xuất xếp hạng di tích và công nhận di sản văn hóa; tổ chức thăm dò, khai quật di tích khảo cổ trên địa bàn Thành phố.">
                            </div>
                            <div className="txt-rotate" data-delay='5800' data-rotate="Trung tâm Bảo tồn di tích hoạt động theo cơ chế của đơn vị sự nghiệp công lập có thu theo Nghị định 43/2006/NĐ-CP; có tư cách pháp nhân, có con dấu riêng; đ ược mở tài khoản tại Kho bạc Nhà nước và ngân hàng theo quy định của pháp luật."></div>
                        </div>

                    </div>
                    <div className="right">
                        <p className="title">
                            Nhiệm vụ và quyền hạn
                        </p>
                        <div className="group-text">
                            <div className='txt-rotate' data-rotate="Nghiên cứu, sưu tầm, phát hiện, kiểm kê, phân loại các công trình địa điểm có giá trị lịch sử, văn hóa để làm cơ sở đề xuất xếp hạng di tích - Chủ đầu tư các công trình tu bổ, tôn tạo, phục hồi và phát huy giá trị di tích thuộc nguồn vốn Nhà nước khi được cơ quan Nhà nước có thẩm quyền giao.">
                            </div>
                            <div className='txt-rotate' data-delay="3100" data-rotate="Nghiên cứu, sưu tầm, phát hiện di sản văn hóa phi vật thể gắn với di tích để lập hồ sơ đưa vào Danh mục di sản văn hóa phi vật thể.">
                            </div>
                            <div className='txt-rotate' data-delay="4600" data-rotate="Được ủy quyền chủ trì các buổi họp xác định các khu vực bảo vệ di tích.">
                            </div>
                            <div className='txt-rotate' data-delay="5400" data-rotate="Đề xuất để Giám đốc Sở Văn hóa và Thể thao đề nghị Ủy ban nhân dân Thành phố xếp hạng di tích cấp Thành phố.">
                            </div>
                            <div className='txt-rotate' data-delay="6600" data-rotate="Đề xuất để Giám đốc Sở Văn hóa và Thể thao trình Ủy ban nhân dân Thành phố đề nghị Bộ Văn hóa, Thể thao và Du lịch xếp hạng di tích cấp quốc gia.">
                            </div>
                            <div className='txt-rotate' data-delay="8350" data-rotate="Nghiên cứu đề xuất các giải pháp bảo tồn di tích lịch sử, văn hóa trên địa bàn Thành phố Hồ Chí Minh và thực hiện các giải pháp khi được cấp thẩm quyền phê duyệt.">
                            </div>
                            <div className='txt-rotate' data-delay="10200" data-rotate="Thực hiện trưng bày tại di tích và các công tác có liên quan đến phát huy giá trị di tích lịch sử, văn hóa.">
                            </div>
                            <div className='txt-rotate' data-delay="11450" data-rotate="Là bộ phận thường trực của Hội đồng xét duyệt công nhận di tích cấp Thành phố.">
                            </div>





                        </div>
                        <p className="date">02/09/2010</p>
                    </div>
                </div>
            </div>
            <div className="intro-item__img --right">
                <img src={intro2} alt="intro_image" />
            </div>
        </div>
    );
}
