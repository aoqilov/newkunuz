import React from "react";
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

const PageOne = () => {
  const aaa = [
    {
      id: 2,
      time: "12:29",
      data: "03.03.2023",
      views: "18470",
      title:
        "Rossiya bosqini, hududiy yaxlitlik va erkinlik – Blinken nega Markaziy Osiyoga keldi?",
      paragrph:
        "AQSh davlat kotibi Entoni Blinkenning Markaziy Osiyoga tashrifidan asosiy maqsad – Qozog‘iston va O‘zbekistonni Rossiyaga sanksiyalarni aylanib o‘tishda yordam bermaslikka chaqirishdir, deydi siyosatshunos Kamoliddin Rabbimov. Bundan tashqari, AQSh Markaziy Osiyo davlatlarining suvereniteti va hududiy yaxlitligini qo‘llab-quvvatlashini ko‘rsatyapti.",
      youtube: "",
      text1:
        "Ukrainada urush Markaziy Osiyo davlatlari siyosiy elitasi ongida katta o‘zgarishlarga sabab bo‘lyapti. Mana shu fonda AQSh va kollektiv G‘arb mintaqaga e’tiborini pasaytirmayotganini ko‘rsatmoqchi. Kun.uz muxbiri AQSh davlat kotibi Entoni Blinkenning Markaziy Osiyoga tashrifi, undan kutilayotgan natijalar va urush atrofidagi voqealar yuzasidan siyosatshunos Kamoliddin Rabbimov bilan suhbatlashdi.",
      text2:
        "Kollektiv G‘arb va AQSh 21 asrdagi o‘zining eng asosiy raqibi deb Xitoyni ko‘radi. Xitoy bu — mintaqaning eng yaqin hamkorlaridan biri. Tojikiston, Qozog‘iston, Qirg‘iziston Xitoy bilan to‘g‘ridan to‘g‘ri chegaradosh. Andijondan Xitoy hududigacha bor-yo‘g‘i 150 km, ya’ni hozirgi globallashgan dunyoda katta masofa emas. Mana shu fonda AQSh va kollektiv G‘arb mintaqadagi homkorligini qaytadan urg‘ulash niyatida. Ya’ni biz mintaqaga e’tiborni pasaytirayotganimiz yo‘q va hamkorlikni juda qadrlaymiz, demoqchi. Qozog‘istondagi eng yirik sarmoyadorlardan biri AQSh. Mintaqada Qozog‘iston iqtisodiy lider bo‘lsa, xavfsizlik va geosiyosat masalalarida O‘zbekistonning mutlaq ahamiyatli o‘rni bor va bu o‘rinni hech kim almashtira olmaydi. Shuning uchun ham possovet hududida Ukraina, O‘zbekiston, Qozog‘iston AQSh uchun eng muhim bo‘lgan davlatlar hisoblanadi. Blinkenning kelishi esa G‘arb bilan aloqalarni qaytadan yangilash va mustahkamlashga qaratilgan.",
      photo1:
        "https://storage.kun.uz/source/thumbnails/_medium/9/K7RtPcOBLLkAKV7omd2rZVAilL05PcEx_medium.jpg",
      photo2:
        "https://storage.kun.uz/source/9/2YVzM7LkQ51HotqqPvNss7xOl2NEpeKz.jpg",
    },
  ];

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
                <p>{aaa[0].time} /</p> <p>{aaa[0].data}</p>
              </div>
              <div className="views box">
                <AiOutlineEye className="top-icon" />
                <p>{aaa[0].views}</p>
              </div>
              <div className="send box">
                <h3>ulashing</h3>
                <FcUpRight className="top-icon" />
              </div>
            </div>
            <h1 className="title">{aaa[0].title}</h1>
            <p className="par">{aaa[0].paragrph}</p>
            {aaa[0].youtube ? (
              <iframe
                className="imgbox-one"
                width="736"
                height="400"
                src={aaa[0].youtube}
                title=";"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ) : (
              <img className="imgbox-one" src={aaa[0].photo1} alt="sd" />
            )}
            <p className="par-text">{aaa[0].text1}</p>
            <img className="imgbox-one" src={aaa[0].photo2} alt="" />
            <p className="par-text">{aaa[0].text2}</p>
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
