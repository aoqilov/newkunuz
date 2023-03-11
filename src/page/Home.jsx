import React from "react";
import Basics from "../components/forHome/Basics";
import LastNewsS from "../components/LastNewsS";
import Muharir from "../components/forHome/Muharir";
import "../style/pagesty/home.scss";
// icons
import Dolzarb from "../components/forHome/Dolzarb";
import Intervyu from "../components/forHome/Intervyu";
import Qonun from "../components/forHome/Qonun";
import Maqola from "../components/forHome/Maqola";
import Biznes from "../components/forHome/Biznes";
import Video from "../components/forHome/Video";
import Foto from "../components/forHome/Foto";
import Footer from "../components/Footer";
import AdvertTop from "../components/AdvertTop";
import Navbar from "../components/Navbar";
import Miks from "../components/Miks";

const Home = () => {
  return (
    <div>
      <AdvertTop />
      <Navbar />
      <Miks />
      <section className="basic__box">
        <div className="basic__left">
          <Basics />

          <Muharir />
        </div>
        <div className="basic__right">
          <LastNewsS />
        </div>
      </section>
      <section className="dolzarb">
        <Dolzarb />
      </section>
      <section className="intervyu">
        <Intervyu />
      </section>
      <section className="qonun">
        <Qonun />
      </section>
      <section className="maqola">
        <Maqola />
      </section>
      <section className="biznes">
        <Biznes />
      </section>
      <section className="media">
        <Video />
        <Foto />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
