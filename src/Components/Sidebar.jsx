import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import cloths from "../Assets/clothes.png";
import electronics from "../Assets/gadgets.png";
import glass from "../Assets/glasses.png";
import jewelery from "../Assets/ring.png";
import signOut from "../Assets/power.png";
import { useNavigate } from "react-router-dom";
import laptop from "../Assets/laptop.png";
import mobile from "../Assets/smartphone.png";
import shoesimg from "../Assets/shoes.png";
import home from "../Assets/house.png";
import { toast } from "react-toastify";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  const navigate = useNavigate();

  const [cloth, setCloth] = useState(false);
  const [ele, setEle] = useState(false);
  const [shoes, isShoes] = useState(true);
  const [men, isMen] = useState(true);
  const [women, isWomen] = useState(true);
  const [lap, isLap] = useState(true);
  const [mob, isMob] = useState(true);
  const [spec, isSpec] = useState(true);
  const [jewel, isJewel] = useState(true);
  const [homes, isHomes] = useState(true);
  const [logout, isLogout] = useState(true);

  const handleOnShoes = () => {
    isShoes(!shoes);
    if (shoes) {
      navigate("/shoes");
    }
  };

  const handleOnMen = () => {
    isMen(!men);
    if (shoes) {
      navigate("/men");
    }
  };

  const handleOnFemale = () => {
    isWomen(!women);
    if (women) {
      navigate("/female");
    }
  };

  const handleOnLap = () => {
    isLap(!lap);
    if (lap) {
      navigate("/laptop");
    }
  };

  const handleOnMob = () => {
    isMob(!mob);
    if (mob) {
      navigate("/mobile");
    }
  };

  const handleOnSpec = () => {
    isSpec(!spec);
    if (spec) {
      navigate("/specs");
    }
  };

  const handleOnJewel = () => {
    isJewel(!jewel);
    if (jewel) {
      navigate("/jewellery");
    }
  };

  const handleOnHome = () => {
    isHomes(!homes);
    if (homes) {
      navigate("/");
    }
  };

  const handleLogOut = () => {
    isLogout(!logout);
    if (logout) {
      toast.success("SIGN OUT SucessFully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/logout");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [isMenuOpen]);

  if (!isMenuOpen) {
    return null;
  }

  const handleSubMenu1 = () => {
    setCloth(!cloth);
    if (ele) {
      setEle(false);
    }
  };

  const handleSubMenu2 = () => {
    setEle(!ele);
    if (cloth) {
      setCloth(false);
    }
  };

  return (
    <div
      className="col-span-1 bg-gradient-to-b from-gray-300 to-gray-400 shadow-xl shadow-black rounded-2xl ml-2 -mt-14 h-screen mb-4"
      data-aos="fade-right"
    >
      <div className="flex justify-center pt-3 border-b-2 border-gray-400 shadow-lg">
        <img className="h-10 w-10 hover:scale-105" src={home} alt="shoes" />
        <h1
          className="text-center font-semibold text-lg text-zinc-950 p-4 cursor-pointer hover:scale-105 hover:text-blue-600"
          onClick={handleOnHome}
        >
          Home
        </h1>
      </div>
      <div className="border-b-2 border-gray-400 shadow-lg">
        <div className="flex justify-center pt-3" onClick={handleSubMenu1}>
          <img
            className="h-10 md:w-10 hover:scale-105"
            src={cloths}
            alt="cloths"
          />
          <h1 className="text-center font-semibold text-lg text-zinc-950 p-4 cursor-pointer hover:scale-105 hover:text-blue-600">
            Cloths
          </h1>
        </div>
        {cloth ? (
          <div>
            <div className="flex flex-row justify-center gap-2 hover:text-blue-500 hover:scale-110 font-medium  cursor-pointer p-2 ">
              <img
                className=" h-5 md:w-5"
                src="https://icons.iconarchive.com/icons/custom-icon-design/flatastic-7/512/Male-icon.png"
                alt=""
              />
              <h1 onClick={handleOnMen}>Men</h1>
            </div>
            <div className="flex flex-row justify-center gap-2 hover:text-blue-500 hover:scale-110 font-medium  cursor-pointer p-2 ">
              <img
                className=" h-5 md:w-5"
                src="https://cdn0.iconfinder.com/data/icons/creative-medical-pack-i/512/23-512.png"
                alt=""
              />
              <h1 onClick={handleOnFemale}>Female</h1>
            </div>
          </div>
        ) : null}
      </div>

      <div className="border-b-2 border-gray-400 shadow-lg">
        <div className="flex justify-center pt-3" onClick={handleSubMenu2}>
          <img
            className=" h-5 w-5 mt-3 ml-2  md:mt-0 md:ml-2 md:h-10 md:w-10 hover:scale-105"
            src={electronics}
            alt="electronics"
          />
          <h1 className="text-center font-semibold text-sm md:text-lg text-zinc-950 p-4 cursor-pointer hover:scale-105 hover:text-blue-600">
            Electronics
          </h1>
        </div>

        {ele ? (
          <div>
            <div className="flex flex-row justify-center gap-2 hover:text-blue-500 hover:scale-110 font-medium  cursor-pointer p-2 ">
              <img className=" h-5 md:w-5" src={laptop} alt="" />
              <h1 onClick={handleOnLap}>Laptop</h1>
            </div>
            <div className="flex flex-row justify-center gap-2 hover:text-blue-500 hover:scale-110 font-medium  cursor-pointer p-2 ">
              <img className=" h-5 md:w-5" src={mobile} alt="" />
              <h1 onClick={handleOnMob}>Mobile</h1>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex justify-center pt-3 border-b-2 border-gray-400 shadow-lg">
        <img className="h-10 w-10 hover:scale-105" src={shoesimg} alt="shoes" />
        <h1
          className="text-center font-semibold text-lg text-zinc-950 p-4 cursor-pointer hover:scale-105 hover:text-blue-600"
          onClick={handleOnShoes}
        >
          Shoes
        </h1>
      </div>

      <div className="flex justify-center pt-3 border-b-2 border-gray-400 shadow-lg">
        <img className="h-10 w-10 hover:scale-105" src={glass} alt="glass" />
        <h1
          className="text-center font-semibold text-lg text-zinc-950 p-4 cursor-pointer hover:scale-105 hover:text-blue-600"
          onClick={handleOnSpec}
        >
          Specs
        </h1>
      </div>

      <div className="flex justify-center pt-3 border-b-2 border-gray-400 shadow-lg">
        <img
          className=" ml-4 md:ml-2 mt-3  md-mt-1 h-7 w-7 md:h-10 md:w-10 hover:scale-105"
          src={jewelery}
          alt="Jewelery"
        />
        <h1
          className="text-center font-semibold text-md  md:text-lg text-zinc-950 p-4 cursor-pointer hover:scale-105 hover:text-blue-600"
          onClick={handleOnJewel}
        >
          Jewellery
        </h1>
      </div>

      <div className="flex justify-center pt-3 border-b-2 border-gray-400 shadow-lg ">
        <img
          className=" ml-2 md:ml-3 mt-3  md:mt-1 w-7 h-7 md:h-10 md:w-10 hover:scale-105 "
          src={signOut}
          alt="signout"
        />
        <h1
          className="text-center font-semibold text-md md:text-lg text-zinc-950 p-4 cursor-pointer hover:scale-105 hover:text-blue-600"
          onClick={handleLogOut}
        >
          Log Out
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
