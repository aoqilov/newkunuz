import axios from "axios";
import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { useQuery } from "react-query";

const Qonun = () => {
  const { data, isLoading, isError, error } = useQuery("qonun", () => {
    return axios.get("http://localhost:4000/qonun");
  });
  if (isLoading) {
    return <p>loading</p>;
  }
  const qonunData = data?.data;

  return (
    <>
      <div className="top__title-dubl">
        <CgShapeCircle className="top-icon" />
        <h1>Konsitutsiya islohoti</h1>
      </div>
      <div className="qonun__box">
        <div className="qonun__leftbox">
          <div className="qonunMain__card">
            <div className="imgbox">
              <img src={qonunData[0].photo1} alt="das" />
            </div>
            <h1>{qonunData[0].title}</h1>
          </div>
        </div>
        <div className="qonun__rightbox">
          <div className="cards">
            {qonunData.slice(1, 5).map((elem) => {
              return (
                <div className="card">
                  <div className="imgbox">
                    <img src={elem.photo1} alt="" />
                  </div>
                  <h1>{elem.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Qonun;
