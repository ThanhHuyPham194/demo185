import { Unity, useUnityContext } from "react-unity-webgl";
import Footer from "../../components/Footer/Footer";
import "./Relic.scss";
import RelicArtifacts from "./RelicArtifacts/RelicArtifacts";
import RelicContentList from "./RelicContentList/RelicContentList";
import RelicDrawing from "./RelicDrawing/RelicDrawing";
import RelicHeading from "./RelicHeading/RelicHeading";
import RelicImageSlider from "./RelicImageSlider/RelicImageSlider";
import RelicSlider from "./RelicSlider/RelicSlider";
export default function Relic() {

  return (
    <div className="relicWrapper">
      <div className="container">
        <RelicHeading></RelicHeading>
        <RelicImageSlider></RelicImageSlider>
        <RelicContentList></RelicContentList>
        <RelicDrawing></RelicDrawing>
        <RelicArtifacts></RelicArtifacts>
        <RelicSlider></RelicSlider>
        <Footer></Footer>
      </div>
    </div>
  );
}

