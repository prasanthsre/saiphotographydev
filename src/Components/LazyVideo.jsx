import React, { forwardRef } from "react";
import Saivideo from "./Videos/sai.mp4"; // Path to your local video

const LazyVideo = forwardRef(({ src, poster, className, ...props }, ref) => {
  return (
    <video
      ref={ref}
      src={Saivideo}
      poster={poster}
      className={className}
      {...props}
    />
  );
});

export default LazyVideo;
