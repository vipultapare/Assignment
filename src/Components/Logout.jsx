import React, { useEffect, useState } from "react";
import thankYou from "../Assets/thank-you.png";
import hands from "../Assets/prayer.png";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  const [login, setLogIn] = useState(true);

  const handleLogin = () => {
    setLogIn(!login);
    if (login) {
      toast.success("Login SucessFully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="flex flex-col justify-center mt-6 md:mt-[5%]"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <img
        className=" h-45 w-45  md:h-80 md:w-80 md:ml-[40%]"
        src={hands}
        alt=""
      />
      <img
        className="h-40 w-40 ml-[34%] md:ml-[45%] mt-4"
        src={thankYou}
        alt=""
      />
      <button
        className="mt-3 p-4 ml-[40%] md:ml-[47%] w-fit bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 text-white font-semibold"
        onClick={handleLogin}
      >
        Visit Again
      </button>
    </div>
  );
};

export default Logout;
