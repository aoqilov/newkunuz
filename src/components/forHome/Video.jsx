import React from "react";
import { CgShapeCircle } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { BsPlay } from "react-icons/bs";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Video = () => {
  const { data, isLoading } = useQuery("video", () => {
    return axios.get("http://localhost:4000/videoNews");
  });
  if (isLoading) {
    return <p>loading...</p>;
  }
  const videoData = data?.data;
  return (
    <div className="video">
      <div className="top__title-dubl">
        <CgShapeCircle className="top-icon" />
        <h1>Video yangiliklar</h1>
        <Link to={"/list"} state={{ state: videoData }}>
          <p>
            Barcha maqolalar
            <BsArrowRight />
          </p>
        </Link>
      </div>
      <div className="videoMain__card">
        <div className="imgbox">
          <img src={videoData[0].photo1} alt="wq" />
          <BsPlay className="play-icon" />
          <Link className="link" to={"/pageone"} state={videoData[0]}>
            <h1>{videoData[0].title}</h1>
          </Link>
        </div>
      </div>
      <div className="video__cards">
        {videoData.slice(1, 3).map((elem) => {
          return (
            <div className="card" key={elem.id}>
              <img src={elem.photo1} alt="e" />
              <div className="vaqt">
                <p className="time">{elem.time}</p>
                <h5>O'zbekiston</h5>
              </div>
              <Link className="link" to={"/pageone"} state={elem}>
                <h1>{elem.title}</h1>
              </Link>
              <BsPlay className="play-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
