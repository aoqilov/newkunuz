import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Loading";
import "../../style/component/intervyu.scss";

const Intervyu = () => {
  const { data, isLoading, isError, error } = useQuery("intervyu", () => {
    return axios.get("http://localhost:4000/intervyu");
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error.message);
  }

  const intervyuData = data?.data;
  return (
    <>
      <div className="top__title-dubl">
        <CgShapeCircle className="top-icon" />
        <h1>Intervyu</h1>
        <p>
          Intervyu
          <BsArrowRight />
        </p>
      </div>
      <div className="intervyu__box">
        {/* int == intervyu */}
        <div className="int__cards">
          {intervyuData.slice(0, 5).map((elem) => {
            return (
              <div className="int__card">
                <div className="imgbox">
                  <img src={elem.photo1} alt="" />
                </div>
                <h1>{elem.title}</h1>
                <p>intervyu</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Intervyu;
