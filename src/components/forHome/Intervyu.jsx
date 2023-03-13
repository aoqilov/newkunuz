import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Loading";
import "../../style/component/intervyu.scss";
import { Link } from "react-router-dom";

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
        <Link className="link" to={"/list"} state={{ state: intervyuData }}>
          <p>
            Intervyu
            <BsArrowRight />
          </p>
        </Link>
      </div>
      <div className="intervyu__box">
        {/* int == intervyu */}
        <div className="int__cards">
          {intervyuData.slice(0, 5).map((elem) => {
            return (
              <div className="int__card" key={elem.id}>
                <div className="imgbox">
                  <img src={elem.photo1} alt="" />
                </div>
                <Link className="link" to={"/pageone"} state={elem}>
                  <h1>{elem.title}</h1>
                </Link>
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
