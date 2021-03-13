import React, { useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  let isDrawing = false;
  let context;
  let lastX = 0;
  let lastY = 0;

  const draw = (context, e) => {
    if (!isDrawing) return;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
    [lastX, lastY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
  };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext("2d");
    context.lineJoin = "round";
    context.lineCap = "round";
    draw(context);
  }, [draw]);

  return (
    <canvas
      height="480"
      width="640"
      ref={canvasRef}
      onMouseDown={(e) => {
        isDrawing = true;
        [lastX, lastY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
      }}
      onMouseMove={(e) => draw(context, e)}
      onMouseUp={() => (isDrawing = false)}
      onMouseOut={() => (isDrawing = false)}
    />
  );
};

export default Canvas;
