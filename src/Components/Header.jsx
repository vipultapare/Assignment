import React from "react";
import logo from "../Assets/logo.png";
import hamburger from "../Assets/hamburger.png";
import cart from "../Assets/cart.png";
import cancel from "../Assets/cancel.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/Redux/toggleSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);

  const number = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gradient-to-br from-gray-300 to-gray-400 shadow-gray-500 shadow-lg rounded-b-2xl">
      {!isMenuOpen ? (
        <img
          className="h-10 w-10 mt-14 ml-10 shadow-2xl
           shadow-gray-900 cursor-pointer hover:scale-110"
          src={hamburger}
          onClick={toggleMenuHandler}
          alt="menu"
        />
      ) : (
        <img
          className="h-10 w-10 mt-14 ml-10 shadow-2xl
           shadow-gray-900 cursor-pointer hover:scale-110"
          src={cancel}
          onClick={toggleMenuHandler}
          alt="cancel"
        />
      )}

      <div className="flex">
        <img className="h-40 w-40 cursor-pointer " src={logo} alt="logo" />
        <h1 className=" hidden md:block  font-bold font-mono text-green-800 mt-8 text-8xl cursor-pointer">
          SHOPPER
        </h1>
      </div>

      <div className="flex flex-col">
        <img
          className="h-12 w-15 mt-14 mr-10 cursor-pointer hover:scale-110"
          src={cart}
          alt="cart"
        />
        <h1 className="ml-5 text-sm font-semibold">{number}</h1>
      </div>
    </div>
  );
};

export default Header;
