import React, { useRef } from "react";

const Video = () => {
  const videoRef = useRef();
  const playButtonRef = useRef();
  const progressBarRef = useRef();
  const rangeRef = useRef();
  const progressRef = useRef();

  let progress;
  let range;
  let progressBar;
  let video;
  let playButton;
  let mouseDown = false;

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

  const handleRangeUpdate = (e) => {
    video[e.target.name] = e.target.value;
  };

  const scrub = (e) => {
    const scrubTime =
      (e.nativeEvent.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  };

  React.useEffect(() => {
    video = videoRef.current;
    playButton = playButtonRef.current;
    progressBar = progressBarRef.current;
    range = rangeRef.current;
    progress = progressRef.current;
    range.value = 1;
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
        <div
          ref={progressRef}
          className="progress"
          onClick={scrub}
          onMouseMove={() => mouseDown && scrub()}
          onMouseDown={() => (mouseDown = true)}
          onMouseUp={() => (mouseDown = false)}
        >
          <div ref={progressBarRef} className="progress-filled" />
        </div>
        <button
          ref={playButtonRef}
          className="player-button"
          onClick={togglePlay}
        />
        <input
          ref={rangeRef}
          type="range"
          className="slider"
          name="volume"
          min="0"
          max="1"
          step="0.05"
          onChange={handleRangeUpdate}
          onMouseMove={handleRangeUpdate}
        />
        <input
          ref={rangeRef}
          type="range"
          className="slider"
          name="playbackRate"
          min="0.5"
          max="2"
          step="0.1"
          onChange={handleRangeUpdate}
          onMouseMove={handleRangeUpdate}
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
