import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { relicImages } from "../constants/constants";
import "./RelicImageSlider.scss";

export default function RelicImageSlider() {
  return (
    <div className="relicImageSlider" data-aos="fade-up">
      <div className="relicImageSlider__text">
        Một số hình ảnh và thông tin về di tích
      </div>
      <div className="relicImageSlider__swiper">
        <Swiper
          speed={1200}
          centeredSlides={true}
          initialSlide={2}
          loop={true}
          slidesPerView={3}
          spaceBetween={0}
          effect={"coverflow"}
          modules={[EffectCoverflow]}
          slideToClickedSlide={true}
          grabCursor
          allowTouchMove={false}
          touchRatio={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 60,
            depth: 200,
          }}
          navigation={{
            nextEl: ".relicSwiperNext",
            prevEl: ".relicSwiperPrevious",
          }}
          className={"relicSwiper"}
        >
          {relicImages &&
            relicImages.map((relicImage) => {
              return (
                <SwiperSlide key={relicImage.id}>
                  <div className="relicImageSlider__swiper--image">
                    <img src={relicImage.image} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="relicImageSlider__swiper--navigation">
          <div className="relicSwiperPrevious">
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
          <div className="relicSwiperNext">
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
      </div>
    </div>
  );
}
