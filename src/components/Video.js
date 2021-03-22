import React, { useRef } from "react";

const Video = () => {
  const videoRef = useRef();
  const playButtonRef = useRef();
  let video;
  let playButton;

  const togglePlay = () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const updateButton = () => {
    const icon = video.paused ? "►" : "❚ ❚";
    playButton.textContent = icon;
  };

  React.useEffect(() => {
    video = videoRef.current;
    playButton = playButtonRef.current;
    playButton.textContent = "►";
    video.src = "skeleton.mp4";
  }, []);

  return (
    <div id="video">
      <video
        ref={videoRef}
        onClick={togglePlay}
        onPlay={updateButton}
        onPause={updateButton}
      />
      <div className="player_controls">
        <button
          ref={playButtonRef}
          className="player_button"
          onClick={togglePlay}
        />
      </div>
    </div>
  );
};

export default Video;
