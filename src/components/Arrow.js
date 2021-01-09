import React from "react";

const Arrow = ({ direction, clickFunction, image }) => {
  return (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      <img src={image} alt="costume" />
    </div>
  );
};

export default Arrow;
