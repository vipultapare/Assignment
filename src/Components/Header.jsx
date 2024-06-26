import React from "react";
import logo from "../Assets/logo.png";
import hamburger from "../Assets/hamburger.png";
import cart from "../Assets/cart.png";

const Header = () => {
  return (
    <div className="flex justify-between bg-gradient-to-br from-gray-300 to-gray-400">
      <img
        className="h-10 w-10 mt-14 ml-10 shadow-2xl shadow-gray-900"
        src={hamburger}
        alt="menu"
      />

      <div className="flex">
        <img className="h-40 w-40 " src={logo} alt="logo" />
        <h1 className=" hidden md:block  font-bold font-mono text-green-800 mt-8 text-8xl">
          SHOPPER
        </h1>
      </div>

      <img className="h-12 w-15 mt-14 mr-10" src={cart} alt="cart" />
    </div>
  );
};

export default Header;
