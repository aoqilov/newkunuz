import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { BiCamera } from "react-icons/bi";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <Link to={"/list"} state={{ state: fotoData }}>
          <p>
            Barcha maqolalar
            <BsArrowRight />
          </p>
        </Link>
      </div>
      <div className="videoMain__card">
        <div className="imgbox">
          <img src={fotoData[0].photo1} alt="wqe" />
          <BiCamera className="play-icon" />
          <Link className="link" to={"/pageone"} state={fotoData[0]}>
            <h1>{fotoData[0].title}</h1>
          </Link>
        </div>
      </div>
      <div className="video__cards">
        {fotoData.slice(1, 3).map((elem) => {
          return (
            <div className="card" key={elem.id}>
              <img src={elem.photo1} alt="dws" />
              <div className="vaqt">
                <p className="time">{elem.time}</p>
                <h5>O'zbekiston</h5>
              </div>
              <Link className="link" to={"/pageone"} state={elem}>
                <h1>{elem.title}</h1>
              </Link>

              <BiCamera className="play-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foto;
