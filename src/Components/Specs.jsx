import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Inner from "./Inner";
import data from "../Data/specs.json";

const Specs = () => {
  return (
    <div className="">
      <Header />

      <div className="grid grid-flow-col">
        <Sidebar />
        <Inner data={data} title={"Specs Items"} />
      </div>
    </div>
  );
};

export default Specs;
