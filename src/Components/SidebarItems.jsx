import React from "react";

const SidebarItems = ({ name }) => {
  return (
    <div>
      <h1 className="text-center font-semibold text-lg text-zinc-950 p-4 cursor-pointer hover:scale-105 hover:text-blue-600">
        {name}
      </h1>
    </div>
  );
};

export default SidebarItems;
