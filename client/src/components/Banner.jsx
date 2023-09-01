import React from "react";
import BannerImg from "../images/banner/banner.png";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner mb-3">
      <img src={BannerImg} alt="banner" />
    </div>
  );
};

export default Banner;
