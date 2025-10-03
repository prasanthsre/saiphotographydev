import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Footer from "./Footer";

// Example videos
import Saivideo from "../Components/Videos/Saivideos.mp4";
import Demo1 from "../Components/Videos/demo1.mp4";
import Demo2 from "../Components/Videos/demo2.mp4";
import Demo3 from "../Components/Videos/demo3.mp4";

const VideoPlayer = () => {
  const videoList = [
    { id: 1, title: "Sai Video", src: Saivideo, thumb: "/thumbnails/thumb1.jpg" },
/*     { id: 2, title: "Demo Video 1", src: Demo1, thumb: "/thumbnails/thumb2.jpg" },
 */    { id: 3, title: "Demo Video 2", src: Demo2, thumb: "/thumbnails/thumb3.jpg" },
    { id: 4, title: "Demo Video 3", src: Demo3, thumb: "/thumbnails/thumb4.jpg" },
    // Add more videos here
  ];

  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  return (
    <section className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      {/* Main Video Player */}
      <div className="w-full flex justify-center items-center bg-black">
        <video
          key={currentVideo.src}
          controls
          autoPlay
          className="w-full max-w-6xl h-[70vh] object-contain rounded-xl shadow-2xl"
        >
          <source src={currentVideo.src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      {/* 3D Trending Video Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          🔥 Trending Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 perspective-1000">
          {videoList.map((video) => (
            <motion.div
              key={video.id}
              onClick={() => setCurrentVideo(video)}
              className={`relative w-full h-60 rounded-xl shadow-lg cursor-pointer overflow-hidden ${
                currentVideo.id === video.id ? "ring-4 ring-amber-400" : ""
              }`}
              whileHover={{
                scale: 1.1,
                rotateX: -5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 200, damping: 10 },
              }}
            >
              {/* Thumbnail */}
              <img
                src={video.thumb}
                alt={video.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay Play Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center transition duration-300"
              >
                <Play size={36} className="text-white" />
              </motion.div>

              {/* Video Title */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white font-semibold">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default VideoPlayer;
