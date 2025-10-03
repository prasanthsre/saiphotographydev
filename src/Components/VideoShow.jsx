import React, { useRef, useState, useEffect } from "react";
import LazyVideo from "./LazyVideo"; // Correct relative path
import Saivideo from "../Components/Videos/sai.mp4";
import { Volume2, VolumeX } from "lucide-react";

const VideoShow = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  // Play/pause on scroll
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
            videoRef.current.muted = true;
            setIsMuted(true);
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full h-[40vh] sm:h-[65vh] lg:h-[85vh] overflow-hidden card2"
      aria-label="Sai Photography promotional video"
    >
      {/* Lazy Video */}
      <LazyVideo
        ref={videoRef}
        src={Saivideo}
        poster="/fallback-image.jpg"
        className="video-bg w-full h-full object-cover"
        loop
        autoPlay
        muted
        playsInline
        preload="metadata"
      />

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-10 right-4 sm:bottom-6 sm:right-6 bg-black/50 p-3 sm:p-4 rounded-full text-white hover:bg-black/70 transition focus:ring-2 focus:ring-amber-400 focus:outline-none"
        aria-pressed={!isMuted}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={15} aria-hidden="true" /> : <Volume2 size={15} aria-hidden="true" />}
      </button>
    </section>
  );
};

export default VideoShow;
