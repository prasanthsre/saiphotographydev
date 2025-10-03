import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="flex gap-8 justify-center items-center py-10">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/yourpage" // 🔹 Replace with your actual page
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Sai Photography on Facebook"
        title="Facebook"
        className="p-5 rounded-2xl bg-blue-600 text-white shadow-[0_10px_20px_rgba(0,0,0,0.5)] 
                   transition-transform duration-500 transform hover:rotate-6 hover:scale-110 
                   hover:shadow-[0_15px_30px_rgba(59,130,246,0.7)]"
      >
        <Facebook size={32} aria-hidden="true" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/sai_photography_75?utm_source=ig_web_button_share_sheet&igsh=MXdlYTBwNjBnZGwyMQ=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Sai Photography on Instagram"
        title="Instagram"
        className="p-5 rounded-2xl bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white 
                   shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 transform 
                   hover:-rotate-6 hover:scale-110 
                   hover:shadow-[0_15px_30px_rgba(236,72,153,0.7)]"
      >
        <Instagram size={32} aria-hidden="true" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@saiphotographymdu1704"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Subscribe to Sai Photography on YouTube"
        title="YouTube"
        className="p-5 rounded-2xl bg-red-600 text-white shadow-[0_10px_20px_rgba(0,0,0,0.5)] 
                   transition-transform duration-500 transform hover:rotate-6 hover:scale-110 
                   hover:shadow-[0_15px_30px_rgba(239,68,68,0.7)]"
      >
        <Youtube size={32} aria-hidden="true" />
      </a>
    </div>
  );
};

export default SocialMedia;
