import React from "react";

const Costume = (props) => {
  const { costume } = props;
  return (
    <div className="costume">
      {costume.accessory ? (
        <div
          className="item"
          style={{ backgroundImage: `url(${costume.accessory.img})` }}
        />
      ) : null}
      {costume.top ? (
        <div
          className="item"
          style={{ backgroundImage: `url(${costume.top.img})` }}
        />
      ) : null}
      {costume.bottom ? (
        <div
          className="item"
          style={{ backgroundImage: `url(${costume.bottom.img})` }}
        />
      ) : null}
    </div>
  );
};

export default Costume;
