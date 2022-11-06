import { gsap } from "gsap";
import React, { useEffect, useState } from 'react';
import img1 from '../../assets/imgs/loadingList/img1.png';
import img10 from '../../assets/imgs/loadingList/img10.png';
import img11 from '../../assets/imgs/loadingList/img11.png';
import img12 from '../../assets/imgs/loadingList/img12.png';
import img13 from '../../assets/imgs/loadingList/img13.png';
import img14 from '../../assets/imgs/loadingList/img14.png';
import img15 from '../../assets/imgs/loadingList/img15.png';
import img2 from '../../assets/imgs/loadingList/img2.png';
import img3 from '../../assets/imgs/loadingList/img3.png';
import img4 from '../../assets/imgs/loadingList/img4.png';
import img5 from '../../assets/imgs/loadingList/img5.png';
import img6 from '../../assets/imgs/loadingList/img6.png';
import img7 from '../../assets/imgs/loadingList/img7.png';
import img8 from '../../assets/imgs/loadingList/img8.png';
import logo from '../../assets/imgs/logo.png';
import './MainLoading.scss';
export default function MainLoading() {
    const [percent, setPercent] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    useEffect(() => {
        let tl = gsap.timeline({ duration: 1 });
        let timer = setTimeout(() => {
            setInterval(() => {
                setPercent(prevState => {
                    if (prevState > 99) {
                        setIsFinished(true);
                        return prevState;
                    }
                    else {
                        return prevState + 1;
                    }
                });
            }, 30);
        }, 1200);
        tl
            .fromTo('.mainLoading__percent .img', { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('.mainLoading__percent .line', { opacity: 0, scale: 0, background: "red" }, { opacity: 1, scale: 1, background: "white" })
            .to('.mainLoading__percent .line', { opacity: 0 })
            .fromTo('.mainLoading__percent .percent', { opacity: 0 }, { opacity: 1 }, "-=0.5")
            .fromTo('.mainLoading__imgs .img', { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, }, "-=.5")
            .fromTo('.mainLoading__bottom .name', { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.5")
            .fromTo('.mainLoading__bottom .copyRight', { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.2")
            ;
        return () => {
            clearTimeout(timer);
        };
    }, []);
    useEffect(() => {
        if (!isFinished) {
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = 'static';
        }
    }, [isFinished]);
    return (
        <div className={`mainLoading ${isFinished && 'done'}`}>
            <div className="mainLoading__percent">
                <div className="img">
                    <img src={logo} alt="logo" />
                </div>
                <div className="line"></div>
                <div className="percent">{percent && percent} %</div>
            </div>
            <div className="mainLoading__imgs">
                <div className="img">
                    <img src={img15} alt="img1" />
                </div>
                <div className="img">
                    <img src={img2} alt="img1" />
                </div>
                <div className="img">
                    <img src={img3} alt="img1" />
                </div>
                <div className="img">
                    <img src={img4} alt="img1" />
                </div>
                <div className="img">
                    <img src={img5} alt="img1" />
                </div>
                <div className="img">
                    <img src={img6} alt="img1" />
                </div>
                <div className="img">
                    <img src={img7} alt="img1" />
                </div>
                <div className="img">
                    <img src={img8} alt="img1" />
                </div>
                <div className="img">
                    <img src={img10} alt="img1" />
                </div>
                <div className="img">
                    <img src={img11} alt="img1" />
                </div>
                <div className="img">
                    <img src={img12} alt="img1" />
                </div>
                <div className="img">
                    <img src={img13} alt="img1" />
                </div>
                <div className="img">
                    <img src={img14} alt="img1" />
                </div>
                <div className="img">
                    <img src={img15} alt="img1" />
                </div>
            </div>

            <div className="mainLoading__bottom">
                <p className='name'>DaiQuocViet Group</p>
                <p className='copyRight'>2022 &copy;</p>
            </div>
        </div>
    );
}
