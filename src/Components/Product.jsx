import React from "react";
import Card from "./Card";

const Product = ({ data }) => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 ">
      {data.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
};

export default Product;
