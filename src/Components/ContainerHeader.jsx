import React from "react";

const ContainerHeader = ({ title }) => {
  return (
    <div className=" ml-1 mt-2 text-2xl md:text-4xl bg-gradient-to-br from-blue-300 to-blue-500 p-4 rounded-xl cursor-pointer">
      <h1>{title}</h1>
    </div>
  );
};

export default ContainerHeader;
