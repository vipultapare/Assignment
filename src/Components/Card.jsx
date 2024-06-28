import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Utils/Redux/cartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const handleCartNumber = () => {
    dispatch(addCart());
  };
  return (
    <div className="flex flex-col mt-2 pt-2 bg-gradient-to-b from-gray-400 to-gray-500 border-2  shadow-lg shadow-gray-600 cursor-pointer hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-600 hover:scale-100">
      <img
        className=" h-25 w-25 md:h-40 md:w-40 ml-2 md:ml-[40%] hover:scale-110 bg-transparent"
        src={item.image}
        alt=""
      />
      <h1 className="text-center text-3xl p-2">{item.name}</h1>
      <p className=" text-xs md:text-sm text-center font-semibold p-2">
        {item.discription}
      </p>
      <p className="text-center font-semibold text-lg pb-2">{item.price} ₹</p>

      <div className="flex flex-row justify-center gap-3 mb-4">
        <button
          className="bg-gradient-to-r from-green-300 to-green-400 text-lg p-4 rounded-lg w-20 hover:bg-gradient-l hover:from-green-600 hover:to-green-600 font-semibold"
          onClick={handleCartNumber}
        >
          Add
        </button>
        <button className="bg-gradient-to-r from-blue-300 to-blue-400 text-lg p-4 rounded-lg w-20 hover:bg-gradient-l hover:blue-green-600 hover:to-blue-600 font-semibold">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
