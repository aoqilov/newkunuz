import axios from "axios";
import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../../style/component/maqola.scss";

const Maqola = () => {
  const { data, isLoading, isError, error } = useQuery("maqola", () => {
    return axios.get("http://localhost:4000/maqola");
  });
  if (isLoading) {
    return <p>loading</p>;
  }

  const maqolaData = data?.data;
  return (
    <>
      <div className="top__title-dubl">
        <CgShapeCircle className="top-icon" />
        <h1>Maqolalar</h1>
        <Link to={"/list"} state={{ state: maqolaData }} className="link">
          <p>
            Barcha maqolalar
            <BsArrowRight />
          </p>
        </Link>
      </div>
      <div className="maqola__box">
        <div className="maqola__cards">
          {maqolaData.slice(0, 6).map((elem) => {
            return (
              <div className="card" key={elem.id}>
                <div className="imgbox">
                  <img src={elem.photo1} alt="ds" />
                </div>
                <div className="info">
                  <Link className="link" to={"/pageone"} state={elem}>
                    <h1>{elem.title}</h1>
                  </Link>
                  <p>{elem.paragrph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Maqola;
