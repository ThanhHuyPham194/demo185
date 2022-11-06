import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import './RelicHeading.scss';
import lang from './LangLeVanDuyet.mp4';
export default function RelicHeading() {
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "../Build/LangLeVanDuyet.loader.js",
  //   dataUrl: "../Build/LangLeVanDuyet.data",
  //   frameworkUrl: "../Build/LangLeVanDuyet.framework.js",
  //   codeUrl: "../Build/LangLeVanDuyet.wasm",
  // });

  return (
    <div className="relicHeading">
      <span className="relicHeading__text">Di tích</span>
      <span className="relicHeading__name">Lăng Lê Văn Duyệt</span>
      <div className="relicHeading__image">
      {/* <div className="unity"> */}
          {/* <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} /> */}
          {/* <img src={lang} alt='lang'/> */}
      {/* </div> */}
      <video className='haha' autoPlay loop >
            <source src={lang} type='video/mp4'/>
          </video>

      </div>
    </div>
  );
}
