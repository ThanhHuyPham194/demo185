import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../../assets/imgs/banner1.png";
import banner2 from "../../../assets/imgs/banner2.png";
import banner3 from "../../../assets/imgs/banner3.png";
import ScrollItem from "./ScrollItem/ScrollItem";
import "./Banner.scss";
import { useEffect } from "react";
import gsap from "gsap";
const relics = [
  {
    id: 1,
    name: "Nhà Hát Lớn TPHCM",
    description:
      "Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi...",
    main_image: banner1,
  },
  {
    id: 2,
    name: "Lăng Lê Văn Duyệt",
    description:
      "Lăng Tả quân Lê Văn Duyệt được xây dựng trên một gò đất cao hình mu rùa ở phần đất xưa kia thuộc xã Bình Hoà,..",
    main_image: banner2,
  },
  {
    id: 3,
    name: "Địa Đạo Củ Chi",
    description:
      "Địa đạo Củ Chi là một hệ thống phòng thủ trong lòng đất ở huyện Củ Chi, cách Thành phố Hồ Chí Minh 55 km ....",
    main_image: banner3,
  },
  {
    id: 4,
    name: "Lorem4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner1,
  },
  {
    id: 5,
    name: "Lorem5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner2,
  },
  {
    id: 6,
    name: "Lorem6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner3,
  },
  {
    id: 7,
    name: "Lorem7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner1,
  },
  {
    id: 8,
    name: "Lorem8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner2,
  },
  {
    id: 9,
    name: "Lorem9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner3,
  },
  {
    id: 10,
    name: "Lorem10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner1,
  },
  {
    id: 11,
    name: "Nhà Hát Lớn TPHCM",
    description:
      "Nhà hát Thành phố Hồ Chí Minh là một nhà hát có mặt tiền hướng ra Công trường Lam Sơn và đường Đồng Khởi...",
    main_image: banner1,
  },
  {
    id: 12,
    name: "Lăng Lê Văn Duyệt",
    description:
      "Lăng Tả quân Lê Văn Duyệt được xây dựng trên một gò đất cao hình mu rùa ở phần đất xưa kia thuộc xã Bình Hoà,..",
    main_image: banner2,
  },
  {
    id: 13,
    name: "Địa Đạo Củ Chi",
    description:
      "Địa đạo Củ Chi là một hệ thống phòng thủ trong lòng đất ở huyện Củ Chi, cách Thành phố Hồ Chí Minh 55 km ....",
    main_image: banner3,
  },
  {
    id: 14,
    name: "Lorem4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner1,
  },
  {
    id: 15,
    name: "Lorem5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner2,
  },
  {
    id: 16,
    name: "Lorem6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner3,
  },
  {
    id: 17,
    name: "Lorem7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner1,
  },
  {
    id: 18,
    name: "Lorem8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner2,
  },
  {
    id: 19,
    name: "Lorem9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner3,
  },
  {
    id: 20,
    name: "Lorem10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    main_image: banner1,
  },
];

export default function Banner() {

  return (
    <>
      <>
        <div className="banner">
          <div className="container">
            <div className="title">
              <span className="title-name">
                <div className="overlay"></div>
                TRUNG TÂM BẢO TỒN VÀ PHÁT HUY <br /> GIÁ TRỊ LỊCH SỬ VĂN HOÁ
                TPHCM
              </span>
              <p className="title-address">
                Địa chỉ: 32 Huỳnh Đình Hai, Phường 24, Bình Thạnh, TPHCM
              </p>
            </div>
            <div className="scroll" id="slider">
              <Swiper slidesPerView={3} direction={"vertical"} grabCursor
                navigation={{ nextEl: '.nextSwiperBanner', prevEl: '.previousSwiperBanner' }}
                watchSlidesProgress
                mousewheel={true}
                touchReleaseOnEdges={true}
                modules={[Mousewheel]}
                slidesPerGroup={3}
                speed={1200}
              >
                {relics.map((relic) => {
                  return (

                    <SwiperSlide key={relic.id}>
                      <ScrollItem
                        name={relic.name}
                        desc={relic.description}
                        image={relic.main_image}
                        index={relic.id}
                      />
                    </SwiperSlide >
                  );
                })}
              </Swiper>
              <div className="scroll__navigation">
                <div className="scroll__navigation--previous previousSwiperBanner">
                  <svg
                    width="6"
                    height="10"
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
                <div className="scroll__navigation--next nextSwiperBanner">
                  <svg
                    width="6"
                    height="10"
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
        </div>
      </>
    </>
  );
}
