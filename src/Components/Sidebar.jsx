import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  const category = useSelector((store) => store?.category.getCategory);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  if (!isMenuOpen) return null;
  return (
    <div
      className="col-span-1 bg-gradient-to-b from-gray-300 to-gray-400 shadow-xl shadow-black rounded-2xl ml-2 -mt-14"
      data-aos="fade-right"
    >
      {category ??
        category.map((c) => <SidebarItems key={c?.id} name={c?.name} />)}
    </div>
  );
};

export default Sidebar;
