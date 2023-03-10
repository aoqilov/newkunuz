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
import { Link } from "react-router-dom";
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
        <Link to={"/list"} state={{ state: biznesData }}>
          <p>
            Hamkorlik qilish
            <BsArrowRight />
          </p>
        </Link>
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
              <SwiperSlide className="swiper-slide" key={elem.id}>
                <div className="card">
                  <img src={elem.photo1} alt="das" />
                  <Link className="link" to={"/pageone"} state={elem}>
                    <h1>{elem.title}</h1>
                  </Link>
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
