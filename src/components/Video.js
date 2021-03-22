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

  const skip = (e) => {
    video.currentTime += parseFloat(e.target.dataset.skip);
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
      <div className="player-controls">
        <button
          ref={playButtonRef}
          className="player-button"
          onClick={togglePlay}
        />
        <button data-skip="-10" className="player-button" onClick={skip}>
          « 10s{" "}
        </button>
        <button data-skip="25" className="player-button" onClick={skip}>
          25s »
        </button>
      </div>
    </div>
  );
};

export default Video;
