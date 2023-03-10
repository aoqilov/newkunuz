import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/component/swiper.scss";

const Biznes = () => {
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
          <SwiperSlide className="swiper-slide">
            <div className="card">
              <img
                src="https://storage.kun.uz/source/9/B025ZP79vug215vYaOhGXoxPSEH9Fkrq.jpg"
                alt="das"
              />
              <h1>
                Payme O‘zbekistonda ayol-tadbirkorlarni qo‘llab-quvvatlash
                loyihasini ishga tushirdi
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img
                src="https://storage.kun.uz/source/9/B025ZP79vug215vYaOhGXoxPSEH9Fkrq.jpg"
                alt="das"
              />
              <h1>
                Payme O‘zbekistonda ayol-tadbirkorlarni qo‘llab-quvvatlash
                loyihasini ishga tushirdi
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <img
                src="https://storage.kun.uz/source/9/B025ZP79vug215vYaOhGXoxPSEH9Fkrq.jpg"
                alt="das"
              />
              <h1>
                Payme O‘zbekistonda ayol-tadbirkorlarni qo‘llab-quvvatlash
                loyihasini ishga tushirdi
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <img
                src="https://storage.kun.uz/source/9/B025ZP79vug215vYaOhGXoxPSEH9Fkrq.jpg"
                alt="das"
              />
              <h1>
                Payme O‘zbekistonda ayol-tadbirkorlarni qo‘llab-quvvatlash
                loyihasini ishga tushirdi
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <img
                src="https://storage.kun.uz/source/9/B025ZP79vug215vYaOhGXoxPSEH9Fkrq.jpg"
                alt="das"
              />
              <h1>
                Payme O‘zbekistonda ayol-tadbirkorlarni qo‘llab-quvvatlash
                loyihasini ishga tushirdi
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <img
                src="https://storage.kun.uz/source/9/B025ZP79vug215vYaOhGXoxPSEH9Fkrq.jpg"
                alt="das"
              />
              <h1>
                Payme O‘zbekistonda ayol-tadbirkorlarni qo‘llab-quvvatlash
                loyihasini ishga tushirdi
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Biznes;
