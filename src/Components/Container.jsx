import React from "react";
import ContainerHeader from "./ContainerHeader";
import Product from "./Product";
import LatestProduct from "./LatestProduct";

const Container = ({ title, data }) => {
  return (
    <div className="ml-1">
      <ContainerHeader title={title} />

      {title === "Latest" ? <LatestProduct /> : <Product data={data} />}
    </div>
  );
};

export default Container;
