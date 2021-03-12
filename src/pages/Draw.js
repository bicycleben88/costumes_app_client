import React from "react";
import Canvas from "../components/Canvas";

const images = [
  { url: "https://i.imgur.com/reakiRw.jpg", alt: "bernard spilsbury" },
];
const Draw = () => {
  return (
    <section className="canvas-container">
      <Canvas
        images={<img src={images[0].url} alt={images[0].alt} width="200" />}
      />
      {images.map((image) => (
        <img
          src={image.url}
          alt={image.alt}
          width="200"
          key={image.url}
          className="canvas-bg"
        />
      ))}
    </section>
  );
};

export default Draw;
