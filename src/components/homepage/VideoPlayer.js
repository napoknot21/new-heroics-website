import React, { useState, useEffect } from 'react';

export default function VideoPlayer() {
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);

  const limit = 900; // Adjusted limit

  function handleResize() {
    const videoContainer = document.getElementById('videoContainer');
    if (videoContainer) {
      const width = videoContainer.offsetWidth;
      const height = Math.min(0.5625 * width, limit); // Aspect ratio of 16:9 (9/16 = 0.5625)
      setVideoWidth(width);
      setVideoHeight(height);

      // Set marginTop based on screen size
      if (window.innerWidth < 768) { // Adjust this value for your breakpoint
        setMarginTop(80); // Adjust margin for mobile
      } else {
        setMarginTop(0); // No margin for larger screens
      }
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id="videoContainer"
      className="w-full"
      style={{
        backgroundImage: `url('gifs/heroicspitch_HD.gif')`, // Path to your GIF
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: videoHeight,
        marginTop: marginTop,
      }}
    >
      {/* The GIF will be displayed as a background image */}
    </div>
  );
}
