import React from "react";

const Item = (props) => {
  const { item } = props;
  return (
    <div className="item" style={{ backgroundImage: `url(${item.img})` }}>
      <h4>{item.item}</h4>
      <button onClick={() => props.addToCostume(item)}>Add To Costume</button>
    </div>
  );
};

export default Item;
