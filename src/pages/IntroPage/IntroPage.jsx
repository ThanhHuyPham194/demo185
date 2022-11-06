import gsap from 'gsap';
import React, { useEffect } from 'react';
import IntroItem from '../../components/IntroItem/IntroItem';
import './IntroPage.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../../components/Footer/Footer';
import { Unity, useUnityContext } from 'react-unity-webgl';

gsap.registerPlugin(ScrollTrigger);
export default function IntroPage() {
//   const { unityProvider } = useUnityContext({
//     loaderUrl: "Build/LangLeVanDuyet.loader.js",
//     dataUrl: "Build/LangLeVanDuyet.data",
//     frameworkUrl: "Build/LangLeVanDuyet.framework.js",
//     codeUrl: "Build/LangLeVanDuyet.wasm",
//   });
    useEffect(() => {
        gsap.fromTo('.introPage .intro-item__img.--left', {
            y: 0,
        }, {
            y: 700,
            scrollTrigger: {
                trigger: ".introPage .intro-item__img.--left",
                scrub: 1,
                start: "-=200 top",
            }
        });
        gsap.fromTo('.introPage .intro-item__img.--right', {
            y: 0,
        }, {
            y: -700,
            scrollTrigger: {
                trigger: ".introPage .intro-item__img.--right",
                scrub: 1,
            }
        });
    }, []);
    return (
        <div className='introPage'>

            <IntroItem isStart={true} />
            <Footer />
        </div>
    );
}
