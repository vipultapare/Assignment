import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Inner from "./Inner";
import data from "../Data/laptop.json";

const Laptop = () => {
  return (
    <div>
      <Header />

      <div className="grid grid-flow-col">
        <Sidebar />
        <Inner data={data} title={"Laptop Items"} />
      </div>
    </div>
  );
};

export default Laptop;
