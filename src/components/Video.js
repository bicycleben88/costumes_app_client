import React, { useRef } from "react";

const Video = () => {
  const videoRef = useRef();
  const playButtonRef = useRef();
  const progressBarRef = useRef();
  let progressBar;
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

  const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  };

  React.useEffect(() => {
    video = videoRef.current;
    playButton = playButtonRef.current;
    progressBar = progressBarRef.current;
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
        onTimeUpdate={handleProgress}
      />
      <div className="player-controls">
        <div className="progress">
          <div className="progress-filled" ref={progressBarRef} />
        </div>
        <button
          ref={playButtonRef}
          className="player-button"
          onClick={togglePlay}
        />
        <input
          type="range"
          className="slider"
          name="volume"
          min="0"
          max="1"
          step="0.05"
          value="1"
        />
        <input
          type="range"
          className="slider"
          name="playbackRate"
          min="0.5"
          max="2"
          step="0.1"
          value="1"
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
