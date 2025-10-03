import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Images
import B1 from "../Components/images/bs05.jpg";
import B2 from "../Components/images/mk002.jpg";
import B3 from "../Components/images/by04.jpg";
import B4 from "../Components/images/mg0001.jpg";
import B5 from "../Components/images/eg006.jpg";
import B6 from "../Components/images/ep009.jpg";
import B7 from "../Components/images/od03.jpg";
import B8 from "../Components/images/ff23.jpg";
 

// Carousel images
const carouselImages = [
  { src: B1, alt: "Bride and groom smiling during a wedding ceremony", title: "Capturing Life’s Moments with Timeless Artistry", subtitle: "Transforming every cherished moment into a timeless work of art" },
  { src: B2, alt: "Portrait photography of a young woman in natural light", title: "Precious Beginnings, Beautifully Captured", subtitle: "Preserving the beauty of life’s earliest and most tender moments" },
  { src: B3, alt: "Crowd enjoying an event with stage lights in the background", title: "Capturing Pure Joy, One Frame at a Time", subtitle: "Freezing every joyful emotion in a single perfect shot" },
  { src: B4, alt: "Wedding photography couple dance", title: "Where Every Moment Meets the Outdoors", subtitle: "Blending nature and life’s special moments in perfect harmony" },
  { src: B5, alt: "Event photography people cheering", title: "Moments of Love, Memories Forever", subtitle: "Turning fleeting expressions of love into eternal memories" },
  { src: B6, alt: "Creative studio photography", title: "Capturing Childhood, One Smile at a Time", subtitle: "Preserving the innocence and joy of every child’s smile" },
  { src: B7, alt: "Landscape shot during sunset", title: "From Festivals to Faith, Captured Beautifully", subtitle: "Immortalizing sacred celebrations and joyous traditions through the lens" },
  { src: B8, alt: "Team of photographers working", title: "Timeless Memories, Perfectly Captured", subtitle: "Crafting photography that keeps your most precious moments alive forever" },
];

const Hero = () => {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="home" className="relative w-screen h-screen overflow-hidden" role="banner">
      {/* Carousel Slides */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => {
          const isActive = index === current;
          const isNext = index === (current + 1) % carouselImages.length;
          const isPrev = index === (current - 1 + carouselImages.length) % carouselImages.length;

          // Only render current, next, prev images for performance
          if (!isActive && !isNext && !isPrev) return null;

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              {/* Lazy-loaded image */}
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                effect="blur"
                visibleByDefault={isActive}
              />
              <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

              {/* Title + Subtitle Overlay */}
              {isActive && (
                <div className="mt-130 absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h2
                    className={`text-4xl md:text-5xl font-serif font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {image.title}
                  </h2>
                  <p
                    className={`mt-4 text-lg md:text-1xl font-light text-gray-100 tracking-wide max-w-2xl transition-all duration-1000 delay-700 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {image.subtitle}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <nav className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30" aria-label="Carousel Navigation">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-amber-400" : "bg-white/50"
            }`}
          />
        ))}
      </nav>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 z-30 flex flex-col items-center">
        <a
          href="#our-collection"
          className="animate-bounce p-2 rounded-full border border-white/50 hover:bg-white/10 focus:ring-2 focus:ring-amber-400 focus:outline-none"
          aria-label="Scroll to portfolio section"
        >
          <ChevronDown size={24} aria-hidden="true" />
        </a>
        <span className="text-xs mt-2 text-gray-300">Scroll to explore</span>
      </div>
    </header>
  );
};

export default Hero;
