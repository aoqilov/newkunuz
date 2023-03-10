import axios from "axios";
import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { useQuery } from "react-query";
import Loading from "../Loading";

const BasicMain = () => {
  const { data, isLoading, isError, error } = useQuery("basicMain", () => {
    return axios.get(`http://localhost:4000/basicMain`);
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error.message);
  }

  const basicMainData = data?.data;
  return (
    <div className="basicMain">
      <div className="basicMain__card">
        <div className="card-imgbox">
          <img src={basicMainData[0].photo1} alt="" />
        </div>
        <div className="card-info">
          <div id="vaqtbox">
            <BsCalendarEvent className="time-icon" />
            <p>{basicMainData[0].time} /</p> <p>{basicMainData[0].data}</p>
          </div>
          <div className="title">
            <h1>{basicMainData[0].title}</h1>
            <p>{basicMainData[0].paragrph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicMain;
