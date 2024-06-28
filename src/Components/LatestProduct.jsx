import React from "react";
import latest from "../Data/latest.json";
import Card from "./Card";

const LatestProduct = () => {
  const data = latest;
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 ">
      {data.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
};

export default LatestProduct;
