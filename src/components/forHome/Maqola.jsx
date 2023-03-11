import axios from "axios";
import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { useQuery } from "react-query";
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
      </div>
      <div className="maqola__box">
        <div className="maqola__cards">
          {maqolaData.slice(0, 6).map((elem) => {
            return (
              <div className="card">
                <div className="imgbox">
                  <img src={elem.photo1} alt="ds" />
                </div>
                <div className="info">
                  <h1>{elem.title}</h1>
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
