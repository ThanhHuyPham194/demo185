import { Swiper, SwiperSlide } from "swiper/react";
import { relics } from "../constants/constants";
import RelicSliderItem from "../RelicSliderItem/RelicSliderItem";
import "./RelicSlider.scss";
export default function RelicSlider() {



  return (
    <div className="relicSlider" data-aos="fade-up">
      <div className="relicSlider__previousButton">
        <svg
          width={6}
          height={10}
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.4701 1.47157C5.73045 1.21122 5.73045 0.789108 5.4701 0.528758C5.20975 0.268409 4.78764 0.268409 4.52729 0.528758L0.527293 4.52876C0.266944 4.78911 0.266944 5.21122 0.527293 5.47157L4.52729 9.47157C4.78764 9.73192 5.20975 9.73192 5.4701 9.47157C5.73045 9.21122 5.73045 8.78911 5.4701 8.52876L1.94151 5.00016L5.4701 1.47157Z"
            fill="white"
          />
        </svg>

      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        className="relicSliderList"
        loop={true}
        grabCursor
        navigation={{
          nextEl: ".relicSlider__nextButton",
          prevEl: ".relicSlider__previousButton",
        }}
      >

        {relics &&
          relics.map((relic) => {
            return (
              <SwiperSlide key={relic.id}>
                <RelicSliderItem relic={relic} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="relicSlider__nextButton">
        <svg
          width={6}
          height={10}
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.4701 1.47157C5.73045 1.21122 5.73045 0.789108 5.4701 0.528758C5.20975 0.268409 4.78764 0.268409 4.52729 0.528758L0.527293 4.52876C0.266944 4.78911 0.266944 5.21122 0.527293 5.47157L4.52729 9.47157C4.78764 9.73192 5.20975 9.73192 5.4701 9.47157C5.73045 9.21122 5.73045 8.78911 5.4701 8.52876L1.94151 5.00016L5.4701 1.47157Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
