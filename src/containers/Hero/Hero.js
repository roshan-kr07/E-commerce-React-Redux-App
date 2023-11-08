import React from "react";
import "./Hero.css";
import home_banner from "../../assets/home_banner2.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="home-banner">
      <img src={home_banner} alt="home_banner" />
      <Link
          activeClass="active"
          to="latest-collection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <button className="btn">Latest Collection ↠</button>
        </Link>
     
    </div>
  );
};

export default Hero;




{
  /* 
first carousel slider------->

import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png";

retrun (
<div className="hero">
  left-section
  <div className="hero-left">
    <h2>NEW ARRIVALS ONLY</h2>
    <div>
      <div className="hero-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="hero-hand-icon" />
      </div>
      <p>collection</p>
      <p>for everyone</p>
    </div>
    <div className="hero-latest-btn">
      <div>Latest Collection</div>
      <img src={arrow_icon} alt="arrow_icon" />
    </div>
  </div>
  right-section
  <div className="hero-right">
    <img src={hero_img} alt="hero_img" />
  </div>
</div>); */
}
