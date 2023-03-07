import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "../style/component/advertTop.scss";

const AdvertTop = () => {
  // fetching
  const { data, isLoading, isError, error } = useQuery("advertTop", () =>
    axios.get(`http://localhost:4000/advertTop`)
  );
  //   fetching number
  const advertRandom = () => {
    const advertNum = Math.ceil(Math.random() * 3);
    return advertNum;
  };
  const advertNumber = advertRandom();

  if (isLoading) {
    return <p>Loading .....</p>;
  }
  if (isError) {
    return <p style={{ color: "red" }}>{error.message}</p>;
  }

  return (
    <div className="advertTop">
      <img src={data?.data[advertNumber]} alt="images adverts" />
    </div>
  );
};

export default AdvertTop;
