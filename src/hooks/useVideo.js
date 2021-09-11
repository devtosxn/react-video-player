import { useState, useEffect } from "react";

const useVideo = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  // Determine whether the video is paused or not
  // Objective is to invert the value of the isPlaying state
  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  // Determine where the video is paused or not depending on isPlaying state
  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);
};

export default useVideo;
