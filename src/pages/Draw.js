import React from "react";
import Canvas from "../components/Canvas";

const Draw = () => {
  const [bgImage, setBgImage] = React.useState("");

  const handleClick = (e) => {
    setBgImage({
      url: e.target.src,
      alt: e.target.alt,
    });
  };

  return (
    <section className="draw">
      <Canvas background={bgImage && bgImage.url} />
      <div className="draw-images">
        <img
          src="https://i.imgur.com/reakiRw.jpg"
          alt="bernard spilsbury"
          width="150"
          height="150"
          onClick={handleClick}
        />
        <img
          src="https://i.imgur.com/v3xZW51.jpg"
          alt="belle gunness"
          width="150"
          height="150"
          onClick={handleClick}
        />
        <img
          src="https://i.imgur.com/6NQvFnn.jpg"
          alt="clutter family"
          width="150"
          height="150"
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default Draw;
