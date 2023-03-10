import axios from "axios";
import React from "react";
// icons
import { CgShapeCircle } from "react-icons/cg";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../../style/component/dolzarb.scss";
import Loading from "../Loading";

const Dolzarb = () => {
  const { data, isLoading, isError, error } = useQuery("dolzarb-all", () => {
    return axios.get("http://localhost:4000/dolzarb");
  });
  if (isLoading) {
    return <Loading />;
  }
  const dolzarbData = data?.data;
  return (
    <>
      <div className="top__title-dubl">
        <CgShapeCircle className="top-icon" />
        <h1>Dolzarb habarlar</h1>
      </div>
      <div className="dolzarb__box">
        <div className="box__left">
          <div className="dolzarbMain__card">
            <div className="dolzarbMain-img">
              <img src={dolzarbData[0].photo1} alt="" />
            </div>
            <div className="dolzarbMain-info">
              <Link className="link" to={"/pageone"} state={dolzarbData[0]}>
                <h1>{dolzarbData[0].title}</h1>
              </Link>

              <p>{dolzarbData[0].paragrph}</p>
            </div>
          </div>
        </div>
        <div className="box__right">
          <div className="cards__right">
            {dolzarbData.slice(1, 5).map((elem) => {
              return (
                <div key={elem.id} className="card">
                  <img src={elem.photo1} alt="" className="imgbox" />
                  <Link className="link" to={"/pageone"} state={elem}>
                    <h1>{elem.title}</h1>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dolzarb;
