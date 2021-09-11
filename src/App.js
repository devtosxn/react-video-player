import { useRef } from "react";
import "./App.css";

import video from "./assets/video.mp4";
import useVideo from "./hooks/useVideo";

function App() {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideo(videoElement);
  return (
    <div className="container">
      <div className="video-wrapper">
        <video src={video} ref={videoElement} onTimeUpdate={handleTimeUpdate} />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play"></i>
              ) : (
                <i className="bx bx-pause"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
