import React, { useEffect } from "react";
import AdvertTop from "../components/AdvertTop";
import LastNewsS from "../components/LastNewsS";
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";
import Tavsiya from "../components/Tavsiya";
import "../style/pagesty/pageone.scss";

import { BsCalendarEvent } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FcUpRight } from "react-icons/fc";
import Miks from "../components/Miks";
import Mavzu from "../components/forOne/Mavzu";
import Biznes from "../components/forHome/Biznes";
import Footer from "../components/Footer";
import RekCubic from "../components/forOne/RekCubic";
import { useLocation } from "react-router-dom";

const PageOne = () => {
  const coming = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [coming]);

  const { state: aaa } = coming;

  return (
    <div>
      <AdvertTop />
      <Navbar />
      <Miks />
      <div className="pageone">
        <div className="last">
          <LastNewsS type="border" />
        </div>
        <div className="main">
          <div className="main__card">
            <div className="card-top">
              <div id="vaqtbox">
                <BsCalendarEvent className="time-icon" />
                <p>{aaa.time} /</p> <p>{aaa.data}</p>
              </div>
              <div className="views box">
                <AiOutlineEye className="top-icon" />
                <p>{aaa.views}</p>
              </div>
              <div className="send box">
                <h3>ulashing</h3>
                <FcUpRight className="top-icon" />
              </div>
            </div>
            <h1 className="title">{aaa.title}</h1>
            <p className="par">{aaa.paragrph}</p>
            {aaa.youtube ? (
              <iframe
                width="740"
                height="400"
                src={`${aaa.youtube}`}
                title='O‘zbek IT mutaxassislari sun&#39;iy intellektni yaratishdi — "Mohira"'
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              ""
            )}
            <img className="imgbox-one" src={aaa.photo1} alt="sd" />
            <p className="par-text">{aaa.text1}</p>
            {aaa.photo2 ? (
              <img className="imgbox-one" src={aaa.photo2} alt="" />
            ) : (
              ""
            )}
            <p className="par-text">{aaa.text2}</p>
          </div>
        </div>
        <div className="reklama">
          <div className="cubic__rek">
            <RekCubic />
          </div>
          <Tavsiya />
          <Popular />
        </div>
      </div>
      <section className="mavzu">
        <Mavzu />
      </section>
      <section className="biznes">
        <Biznes />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PageOne;
