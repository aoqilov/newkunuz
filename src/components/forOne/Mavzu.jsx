import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsCalendarEvent } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Loading";
import "../../style/component/mavzu.scss";

const Mavzu = () => {
  const { data, isLoading, isError, error } = useQuery("muharir", () => {
    return axios.get("http://localhost:4000/muharir");
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error.message);
  }
  const muharirData = data?.data;
  return (
    <div className="mavzu">
      <div className="top__title-dubl">
        <CgShapeCircle className="top-icon" />
        <h1>Mavzuga oid</h1>
        <Link to={"/list"} state={{ state: muharirData }}>
          <p>barchasi</p>
        </Link>
      </div>
      <div className="muharir__cards">
        {muharirData.slice(0, 4).map((elem) => {
          return (
            <div className="muharir__card" key={elem.id}>
              <img src={elem.photo1} alt="" className="muharir-img" />
              <div className="muharir-info">
                <div id="vaqtbox">
                  <BsCalendarEvent className="time-icon" />
                  <p> {elem.time} /</p> <p>{elem.data}</p>
                </div>
                <Link className="link" to={"/pageone"} state={elem}>
                  <h1 className="muharir-text">{elem.title}</h1>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mavzu;
