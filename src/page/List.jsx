import React, { useEffect, useState } from "react";
import AdvertTop from "../components/AdvertTop";
import Navbar from "../components/Navbar";
import "../style/pagesty/list.scss";
import { CgShapeCircle } from "react-icons/cg";
import { BsCalendarEvent } from "react-icons/bs";
import { CgSoftwareDownload } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import Popular from "../components/Popular";
import Tavsiya from "../components/Tavsiya";
import Mavzu from "../components/forOne/Mavzu";
import Footer from "../components/Footer";

const List = () => {
  const [load, setLoad] = useState(9);

  const location = useLocation();
  const { state: listData } = location?.state;
  console.log(listData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AdvertTop />
      <Navbar />
      <div className="list">
        <div className="list__leftbox">
          <div className="top__title-dubl">
            <CgShapeCircle className="top-icon" />
            <h1>Maqolalar</h1>
          </div>
          <div className="cardbox__left">
            {listData.slice(0, load).map((elem) => {
              return (
                <div className="card" key={elem.id}>
                  <div className="card-img">
                    <img src={elem.photo1} alt="sad" />
                  </div>
                  <div id="vaqtbox">
                    <BsCalendarEvent className="time-icon" />
                    <p> {elem.time} /</p> <p>{elem.data}</p>
                  </div>
                  <h1 className="title">{elem.title}</h1>
                </div>
              );
            })}
          </div>
          <div className="load" onClick={() => setLoad((prev) => prev + 6)}>
            Ko'proq yangiliklar
            <CgSoftwareDownload className="load-icon" />
          </div>
        </div>
        <div className="list__rightbox">
          <div className="news__box">
            <Popular />
            <Tavsiya />
          </div>
        </div>
      </div>
      <div className="list__mavzu">
        <Footer />
      </div>
    </div>
  );
};

export default List;
