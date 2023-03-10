import React from "react";
import BasicMain from "../components/forHome/BasicMain";
import Basics from "../components/forHome/Basics";
import LastNewsS from "../components/forHome/LastNewsS";
import Muharir from "../components/forHome/Muharir";
import "../style/pagesty/home.scss";
// icons
import Dolzarb from "../components/forHome/Dolzarb";
import Intervyu from "../components/forHome/Intervyu";
import Qonun from "../components/forHome/Qonun";
import Maqola from "../components/forHome/Maqola";
import Biznes from "../components/forHome/Biznes";

const Home = () => {
  return (
    <div>
      <section className="basic__box">
        <div className="basic__left">
          <BasicMain />
          <Basics />
          {/* muharir box */}
          <Muharir />
        </div>
        <div className="basic__right">
          {/* lasNewsS */}
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
    </div>
  );
};

export default Home;
