import React, { useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
