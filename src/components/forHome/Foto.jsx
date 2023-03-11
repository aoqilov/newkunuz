import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { BiCamera } from "react-icons/bi";
import { useQuery } from "react-query";
import axios from "axios";

const Foto = () => {
  const { data, isLoading } = useQuery("foto", () => {
    return axios.get("http://localhost:4000/fotoNews");
  });
  if (isLoading) {
    return <p>loading.....</p>;
  }
  const fotoData = data?.data;
  return (
    <div className="foto">
      <div className="top__title-dubl">
        <CgShapeCircle className="top-icon" />
        <h1>Foto yangiliklar</h1>
        <p>
          Barcha maqolalar
          <BsArrowRight />
        </p>
      </div>
      <div className="videoMain__card">
        <div className="imgbox">
          <img src={fotoData[0].photo1} alt="wqe" />
          <BiCamera className="play-icon" />
          <h1>{fotoData[0].title}</h1>
        </div>
      </div>
      <div className="video__cards">
        {fotoData.slice(1, 3).map((elem) => {
          return (
            <div className="card">
              <img src={elem.photo1} alt="dws" />
              <div className="vaqt">
                <p className="time">{elem.time}</p>
                <h5>O'zbekiston</h5>
              </div>
              <h1>{elem.title}</h1>
              <BiCamera className="play-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foto;
