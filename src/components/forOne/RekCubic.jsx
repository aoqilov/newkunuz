import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Autoplay } from "swiper";

const RekCubic = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.54,
        }}
        autoplay={{ delay: 3000 }}
        modules={[EffectCube, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.titoni.ch/fileadmin/_processed_/4/e/csm_Referenz_83019_S-ST-639_412d0bcfc9.jpg"
            alt="as"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.titoni.ch/fileadmin/_processed_/6/8/csm_HE_83019_s_639_31fd35b305.jpg"
            alt="as"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkHI4YAm57q2OzvnCHgcFj2L1JuTxMFuQzg&usqp=CAU"
            alt="as"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7c3_T5vmokDat_qS9_wsDI9SbFuFCQ4zDBA&usqp=CAU"
            alt="as"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default RekCubic;
