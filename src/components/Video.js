import React, { useRef } from "react";

const Video = () => {
  const videoRef = useRef();
  let video;

  const togglePlay = () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  React.useEffect(() => {
    video = videoRef.current;
    video.src = "skeleton.mp4";
  }, []);

  return (
    <div id="video">
      <video ref={videoRef} onClick={togglePlay} />
    </div>
  );
};

export default Video;
