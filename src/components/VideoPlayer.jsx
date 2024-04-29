import React, { useRef, useEffect } from 'react';
import dashjs from 'dashjs';

const VideoPlayer = ({ src, subtitles }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
  
    const player = dashjs.MediaPlayer().create();
    player.initialize(videoRef.current, src, true);
  
    if (subtitles) {
      player.updateSettings({
        captions: {
          enabled: true,
          language: 'en',
          label: 'English',
          vttURL: subtitles[0].url
        }
      });
    }
  
    // Listen for 'loadedmetadata' event to ensure the video metadata is loaded
    videoRef.current.addEventListener('loadedmetadata', () => {
      // Seek to the beginning of the video
      videoRef.current.currentTime = 0;
    });
  
    return () => {
      player.reset();
    };
  }, [src, subtitles]);
  

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
