import React from "react";
import "../../style/component/basics.scss";
import { BsCalendarEvent } from "react-icons/bs";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../Loading";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="basicMain">
        <div className="basicMain__card">
          <div className="card-imgbox">
            <img src={basicsData[0].photo1} alt="" />
          </div>
          <div className="card-info">
            <div id="vaqtbox">
              <BsCalendarEvent className="time-icon" />
              <p>{basicsData[0].time} /</p> <p>{basicsData[0].data}</p>
            </div>
            <div className="title">
              <Link className="link" to={"/pageone"} state={basicsData[0]}>
                <h1>{basicsData[0].title}</h1>
              </Link>
              <p>{basicsData[0].paragrph}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="basics">
        {basicsData.slice(1, 5).map((elem) => {
          return (
            <div className="basics__card" key={elem.id}>
              <img className="basics-img" src={elem.photo1} alt="basics" />
              <div className="basics-info">
                <div id="vaqtbox">
                  <BsCalendarEvent className="time-icon" />
                  <p> {elem.time} /</p> <p>{elem.data}</p>
                </div>
                <Link className="link" to={"/pageone"} state={elem}>
                  <h1 className="basics-title">{elem.title}</h1>
                </Link>
                <span className="border-bottom"></span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Basics;
