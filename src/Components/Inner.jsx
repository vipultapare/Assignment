import React, { useEffect } from "react";
import Container from "./Container";
import Aos from "aos";
import "aos/dist/aos.css";

const Inner = ({ data, title }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="col-span-11" data-aos="fade-right">
      <Container title={title} data={data} />
    </div>
  );
};

export default Inner;
