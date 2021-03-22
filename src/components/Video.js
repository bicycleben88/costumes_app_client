import React, { useRef } from "react";

const Video = () => {
  const videoRef = useRef();

  React.useEffect(() => {
    videoRef.current.src = "skeleton.mp4";
  }, []);

  return (
    <div id="video">
      <video ref={videoRef} onClick={() => videoRef.current.play()} />
    </div>
  );
};

export default Video;
