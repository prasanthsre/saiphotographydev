import React, { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";
import Modal from "../Components/Model.jsx";

// Images
import eg from "../Components/Images/eg005.jpg";
import eg1 from "../Components/Images/eg006.jpg";

import mrge from "../Components/Images/mg0001.jpg";
import mrge1 from "../Components/Images/mg0006.jpg";
import mrge2 from "../Components/Images/mg0015.jpg";
import mrge3 from "../Components/Images/mg0023.jpg";

import BS001 from "../Components/Images/bs03.jpg";
import BS002 from "../Components/Images/bs05.jpg";
import BS003 from "../Components/Images/bs12.jpg";
import BS004 from "../Components/Images/bs10.jpg";

import BY01 from "../Components/Images/by02.jpg";
import BY02 from "../Components/Images/by04.jpg";
import BY03 from "../Components/Images/by12.jpg";
import BY04 from "../Components/Images/by09.jpg";

import OD01 from "../Components/Images/od04.jpg";
import OD02 from "../Components/Images/od12.jpg";
import OD03 from "../Components/Images/od02.jpg";
 import OD04 from "../Components/Images/od06.jpg";



import bd001 from "../Components/Images/bd008.jpg";
import bd002 from "../Components/Images/bd001.jpg";
import bd003 from "../Components/Images/bd007.jpg";
import bd004 from "../Components/Images/bd009.jpg";


// Lazy loading for web images
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { useTheme } from "../Components/Contexts/ThemeContext.jsx";

const OurExplain = () => {
  const { theme } = useTheme();

  const themeStyles = {
    section: theme === "dark" ? "bg-gray-900" : "bg-gray-50",
    title: theme === "dark" ? "text-white" : "text-gray-900",
    subtitle: theme === "dark" ? "text-gray-400" : "text-gray-600",
    card: theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
    cardText: theme === "dark" ? "text-white" : "text-gray-900",
    cardDesc: theme === "dark" ? "text-gray-300" : "text-gray-600",
  };

  const events = [
    {
      title: "Marriage",
      subtitle: "Events",
      img: mrge2,
      desc: "We capture every emotional moment of your wedding, preserving memories for a lifetime.",
      images: [mrge, mrge1, mrge2, mrge3],
    },
    {
      title: "Engagement",
      subtitle: "Events",
      img: eg,
      desc: "Celebrate the joy of your engagement with stunning photography tailored to your love story.",
      images: [eg, eg1],
    },
    {
      title: "Baby Shower",
      subtitle: "Events",
      img: BS002,
      desc: "Cherish the anticipation of new beginnings with heartfelt baby shower photography.",
      images: [BS002, BS001, BS003, BS004],
    },
    {
      title: "Birthday",
      subtitle: "Events",
      img: bd001,
      desc: "From kids to adults, we make birthdays unforgettable with vibrant, candid photography.",
      images: [bd001, bd002,bd003,bd004],
    },
    {
      title: "Baby Shoot",
      subtitle: "Capture",
      img: BY01,
      desc: "Beautifully crafted photo frames to showcase your most precious moments.",
      images: [BY01,BY02 , BY03, BY04],
    },
    {
      title: "Outdoor Shoot",
      subtitle: "Outdoor",
      img: OD01,
      desc: "Beautifully crafted photo frames to showcase your most precious moments.",
      images: [OD01,  OD03, OD04,OD02,],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section
      id="our-collection"
      className={`relative min-h-screen py-20 px-4 overflow-hidden ${themeStyles.section}`}
      aria-labelledby="our-collection-title"
    >
      {/* Decorative Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-pink-900/10"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2
            id="our-collection-title"
            className={`text-5xl font-bold mb-6 ${themeStyles.title}`}
          >
            Our <span className="text-orange-500">Collections</span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto leading-relaxed ${themeStyles.subtitle}`}
          >
            Discover our curated collection of premium event services and artistic creations
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {events.map((event, index) => (
            <article
              key={index}
              className="group relative w-full max-w-sm"
              aria-labelledby={`event-${index}-title`}
            >
              <div
                className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${themeStyles.card}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <LazyLoadImage
                    src={event.img}
                    alt={`${event.title} photography example`}
                    effect="blur"
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {event.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    id={`event-${index}-title`}
                    className={`text-2xl font-bold mb-2 transition-colors duration-300 ${themeStyles.cardText}`}
                  >
                    {event.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${themeStyles.cardDesc}`}>
                    {event.desc}
                  </p>

                  <button
                    onClick={() => openModal(event)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 group/btn focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    aria-label={`Explore ${event.title} collection`}
                  >
                    <Eye size={18} aria-hidden="true" />
                    <span>Explore Collection</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} event={selectedEvent} />
    </section>
  );
};

export default OurExplain;
