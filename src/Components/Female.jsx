import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Inner from "./Inner";
import data from "../Data/female.json";

const Female = () => {
  return (
    <div className="">
      <Header />

      <div className="grid grid-flow-col">
        <Sidebar />
        <Inner data={data} title={"Female Items"} />
      </div>
    </div>
  );
};

export default Female;
