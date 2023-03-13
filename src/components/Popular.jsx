import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsCalendarEvent } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { useQuery } from "react-query";
import axios from "axios";
import "../style/component/popular.scss";
import Loading from "./Loading";

const Popular = () => {
  const { data, isLoading, isError, error } = useQuery("last-newsS", () => {
    return axios.get("http://localhost:4000/lastnewsS");
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error.message);
  }
  const lastNewsSData = data?.data;
  return (
    <div className="popular">
      <div className="top__title">
        <CgShapeCircle className="top-icon" />
        <h1>Ko'p o'qilganlar</h1>
      </div>

      <div className="lastnewsS__cards">
        {lastNewsSData.slice(0, 3).map((elem) => {
          return (
            <div className="lastnewsS__card" key={elem.id}>
              <div id="vaqtbox">
                <BsCalendarEvent className="time-icon" />
                <p>{elem.time}</p>
              </div>
              <h1>{elem.title}</h1>
              <span className="border-bottom"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
