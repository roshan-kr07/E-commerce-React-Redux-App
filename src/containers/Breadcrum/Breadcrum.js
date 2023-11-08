import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="arrow_icon" />
      All categories <img src={arrow_icon} alt="arrow_icon1" />
      {product.category}
      <img src={arrow_icon} alt="arrow_icon2" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
