import React from "react";
import i1 from "..//Components/EventPhotos/ME.jpg";
import i2 from "..//Components/EventPhotos/ee.jpg";
import i3 from "..//Components/EventPhotos/BSE.jpg";
import i4 from "..//Components/EventPhotos/BDE.jpg";
import i5 from "..//Components/EventPhotos/Epe.jpg";
import i6 from "..//Components/EventPhotos/pEproduct.jpg";
import i7 from "..//Components/EventPhotos/PE.jpg";
import "..//Components/ImageSliders.css";

import { useTheme } from "..//Components/Contexts/ThemeContext.jsx";
import SocialMedia from "./SocialMedia.jsx";

const slides = [
  { img: i1, title: "Marriage" },
  { img: i2, title: "Engagement" },
  { img: i3, title: "Baby Shower" },
  { img: i4, title: "Birthday" },
  { img: i5, title: "Ear Piercings" },
  { img: i6, title: "Product Shoot" },
  { img: i7, title: "Politician" },
];

const ImageSliders = () => {
  const { theme } = useTheme();

  const themeStyles = {
    section:
      theme === "dark"
        ? "bg-gradient-to-b from-gray-950 via-black to-gray-900"
        : "bg-gradient-to-b from-gray-50 via-white to-gray-100",
    title: theme === "dark" ? "text-white" : "text-gray-900",
    cardBorder: theme === "dark" ? "border-gray-700" : "border-gray-300",
    cardShadow: theme === "dark" ? "shadow-purple-500/30" : "shadow-gray-400/30",
    text: theme === "dark" ? "text-gray-200" : "text-gray-700",
    carouselBg:
      theme === "dark"
        ? "bg-white/5 backdrop-blur-lg border border-gray-800"
        : "bg-white/70 backdrop-blur-lg border border-gray-200",
  };

  return (
    <div
      className={`flex flex-col items-center min-h-[100vh] py-12 overflow-hidden ${themeStyles.section}`}
    >
      {/* Section Title */}
      <h3
        className={`text-5xl md:text-6xl font-extrabold uppercase tracking-widest mb-0 drop-shadow-lg ${themeStyles.title}`}
      >
        Events
      </h3>

      {/* Carousel */}
      <div className="image-slider-wrapper">
        <div
          className={`carousel ${themeStyles.carouselBg} rounded-2xl shadow-2xl  `}
        >
          <div className="image-track  h-[50vh] ">
            {slides.concat(slides).map((slide, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-4 w-52"
              >
                {/* Image */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className={`w-52 h-[100vh] rounded-xl object-cover border ${themeStyles.cardBorder} shadow-lg ${themeStyles.cardShadow} hover:scale-105 hover:rotate-1 transition-transform duration-500 ease-in-out`}
                />

                {/* Title */}
                <p
                  className={`mt-2 text-center uppercase tracking-wide font-extrabold text-lg ${
                    theme === "dark" ? "text-amber-400" : "text-orange-600"
                  }`}
                >
                  {slide.title}
                </p>
              </div>
            ))}
          </div>
 
      </div>
         <SocialMedia />
      </div>
  

    </div>
  );
};

export default ImageSliders;
