import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Inner from "./Inner";
import data from "../Data/male.json";

const Men = () => {
  return (
    <div className="">
      <Header />

      <div className="grid grid-flow-col">
        <Sidebar />
        <Inner data={data} title={"Male Items"} />
      </div>
    </div>
  );
};

export default Men;
