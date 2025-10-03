import React, { useEffect } from "react";
import { X, Heart, Share2 } from "lucide-react";

const Modal = ({ isOpen, onClose, event }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with glassmorphism */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300">
          {/* Header */}
          <div className="relative p-6 pb-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 hover:scale-105"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-3xl font-bold text-white mb-2 pr-16">
              {event.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6" />
          </div>

          {/* Content */}
          <div className="px-6 pb-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {event.images.map((imgSrc, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={imgSrc}
                    alt={`${event.title} ${i + 1}`}
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-white/90 text-lg leading-relaxed">
                {event.desc}
              </p>
            </div>

            {/* Action Buttons */}
          {/*   <div className="flex gap-4 mt-6">
              <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                <Heart size={18} />
                Save to Favorites
              </button>
              <button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
                <Share2 size={18} />
                Share Collection
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
