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

  // Determine the current progress of the video
  // Objective is to show this on the progress bar
  const handleProgress = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  // Provide the functionality to drag the progress bar so that choose the current time of the video to view
  const handleVideoProgress = (e) => {
    const manualChange = Number(e.target.value);
    const newTime = manualChange * (videoElement.current.duration / 100);
    videoElement.current.currentTime = newTime;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  // Implement the handling of video playback speed
  const handleVideoSpeed = (e) => {
    const speed = Number(e.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };
};

export default useVideo;
