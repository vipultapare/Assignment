import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Inner from "./Inner";
import data from "../Data/mobile.json";

const Mobile = () => {
  return (
    <div className="">
      <Header />

      <div className="grid grid-flow-col">
        <Sidebar />
        <Inner data={data} title={"Mobile Items"} />
      </div>
    </div>
  );
};

export default Mobile;
