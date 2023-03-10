import React from "react";
import "../../style/pagesty/home.scss";
import { BsCalendarEvent } from "react-icons/bs";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Loading";

const Basics = () => {
  const { data, isLoading, isError, error } = useQuery("basics", async () => {
    return await axios.get("http://localhost:4000/basics");
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error.message);
  }
  const basicsData = data?.data;
  console.log(basicsData);
  return (
    <div className="basics">
      {basicsData.map((elem) => {
        return (
          <div className="basics__card" key={elem.id}>
            <img className="basics-img" src={elem.photo1} alt="basics" />
            <div className="basics-info">
              <div id="vaqtbox">
                <BsCalendarEvent className="time-icon" />
                <p> {elem.time} /</p> <p>{elem.data}</p>
              </div>
              <h1 className="basics-title">{elem.title}</h1>
              <span className="border-bottom"></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Basics;
