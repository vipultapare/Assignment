import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Inner from "./Inner";
import data from "../Data/jewelley.json";

const Jewellery = () => {
  return (
    <div className="">
      <Header />

      <div className="grid grid-flow-col">
        <Sidebar />
        <Inner data={data} title={"Jewellery Items"} />
      </div>
    </div>
  );
};

export default Jewellery;
