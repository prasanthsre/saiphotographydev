import React from "react";
import { motion } from "framer-motion";

import i1 from "../Components/EventPhotos/ME.jpg";
import i2 from "../Components/EventPhotos/ee.jpg";
import i3 from "../Components/EventPhotos/BSE.jpg";
import i4 from "../Components/EventPhotos/BDE.jpg";
import i5 from "../Components/EventPhotos/Epe.jpg";
import i6 from "../Components/EventPhotos/pEproduct.jpg";
import i7 from "../Components/EventPhotos/PE.jpg";

const Gallery = () => {
  const slides = [
    { img: i1, title: "Marriage" },
    { img: i2, title: "Engagement" },
    { img: i3, title: "Baby Shower" },
    { img: i4, title: "Birthday" },
    { img: i5, title: "Ear Piercings" },
    { img: i6, title: "Product Shoot" },
    { img: i7, title: "Politician" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold font-serif text-center mb-12">
        📸 Photo Gallery
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
           
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
