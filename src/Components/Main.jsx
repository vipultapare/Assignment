import React from "react";
import Sidebar from "./Sidebar";
import SubMain from "./SubMain";

const Main = () => {
  return (
    <div className="grid grid-flow-col bg-gradient-to-bl from-gray-300 to-gray-400 mt-2">
      <Sidebar />

      <SubMain />
    </div>
  );
};

export default Main;
