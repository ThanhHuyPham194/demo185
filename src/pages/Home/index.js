import gsap from 'gsap';
import { useEffect } from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';
import Footer from '../../components/Footer/Footer';
import IntroItem from '../../components/IntroItem/IntroItem';
import Banner from './Banner/Banner';
import './index.scss';
import News from './News/News';
import Relics from './Relics/Relics';
export default function Home() {
    useEffect(() => {
        gsap.fromTo('.home .intro-item__img.--left img', {
            y: 0,
        }, {
            y: 800,
            scrollTrigger: {
                trigger: ".home .--letter",
                scrub: 1,
                start: "top +=40%",
            }
        });
        gsap.fromTo('.home .intro-item__img.--right', {
            y: 0,
            duration: 10
        }, {
            y: -800,
            scrollTrigger: {
                trigger: ".home .intro-item__img.--right",
                scrub: 1,
            }
        });

    }, []);
    return (
        <div className='home'>
            <Banner />
            <IntroItem />
            <Relics />
            <News />
            <div className="home__footer">
                <ContactItem />
                <Footer />
            </div>
        </div>
    );
}
