import React from "react";
import { BsArrowRight } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/component/swiper.scss";
import { useQuery } from "react-query";
import axios from "axios";
import "../../style/component/biznes.scss";
const Biznes = () => {
  const { data, isLoading } = useQuery("biznes", () => {
    return axios.get("http://localhost:4000/biznes");
  });
  if (isLoading) {
    return <p>loading...</p>;
  }
  const biznesData = data?.data;
  return (
    <>
      <div className="top__title-dubl">
        <img src="https://kun.uz/assets/99110d40/img/kun-uz-logo.svg" alt="" />
        <h1> Biznes</h1>
        <p>
          Hamkorlik qilish
          <BsArrowRight />
        </p>
      </div>
      <div className="biznes__box">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {biznesData.map((elem) => {
            return (
              <SwiperSlide className="swiper-slide">
                <div className="card">
                  <img src={elem.photo1} alt="das" />
                  <h1>{elem.title}</h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Biznes;
