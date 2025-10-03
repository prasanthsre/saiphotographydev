"use client";
import { memo, useState } from "react";
import {
  Users,
  Camera,
  Star,
  Package,
  PenTool,
  Heart,
} from "lucide-react";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";

const features = [
  {
    icon: Users,
    title: "Expertise in Indian Weddings",
    desc: "We understand the colors, rituals, and emotions of Indian weddings—capturing not just the events but the meaning behind every moment.",
  },
  {
    icon: PenTool,
    title: "Personalized Service",
    desc: "Your love story is one of a kind. We craft every shot around your style, making sure your day looks exactly how you’ve always dreamed.",
  },
  {
    icon: Camera,
    title: "High-Quality Equipment",
    desc: "From the sparkle in your eyes to the laughter in the crowd, our cameras and audio gear ensure every detail is crystal clear.",
  },
  {
    icon: Star,
    title: "Creative Storytelling",
    desc: "Your wedding isn’t just an event—it’s a story. We weave every glance, smile, and ritual into a cinematic journey.",
  },
  {
    icon: Package,
    title: "Comprehensive Packages",
    desc: "From pre-wedding shoots to the last dance, our tailored packages let you choose what you need without missing a magical moment.",
  },
  {
    icon: Heart,
    title: "Seamless Experience",
    desc: "On your wedding day, focus on each other. We quietly take care of everything behind the lens, so you can live the moment.",
  },
];

const Card3D = memo(function Card3D({ children, theme }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.3s ease-out",
    });
  };

  return (
    <div
      className="relative p-[3px] rounded-xl overflow-hidden h-[320px] flex"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      role="listitem"
    >
      {/* Animated border (reduced motion friendly) */}
      <div
        className="absolute inset-0 bg-[conic-gradient(#EA2027,#FFC312,#12CBC4,#C4E538,#EA2027)] motion-safe:animate-[spin_8s_linear_infinite]"
        aria-hidden="true"
      ></div>

      {/* Inner card */}
      <div
        className={`relative flex flex-col justify-center items-center text-center p-6 rounded-xl shadow-lg w-full h-full transition-transform duration-200 ease-out ${
          theme === "dark" ? "bg-gray-900/90" : "bg-white"
        }`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
});

export default function WhyChooseUs() {
  const { theme } = useTheme();

  const themeStyles = {
    section: theme === "dark" ? "bg-gray-950" : "bg-gray-50",
    heading: theme === "dark" ? "text-white" : "text-gray-900",
    subheading: theme === "dark" ? "text-gray-400" : "text-gray-600",
    cardText: theme === "dark" ? "text-white" : "text-gray-900",
    cardLabel: theme === "dark" ? "text-gray-400" : "text-gray-600",
  };

  return (
    <section
      id="why-choose-us"
      className={`py-16 text-center ${themeStyles.section}`}
      aria-labelledby="why-choose-us-title"
    >
      <header className="max-w-2xl mx-auto mb-12">
        <h2
          id="why-choose-us-title"
          className={`text-3xl font-bold mb-4 ${themeStyles.heading}`}
        >
          Why Choose <span className="text-yellow-600">Us</span>
        </h2>
        <p className={`text-lg ${themeStyles.subheading}`}>
          We’re more than photographers—we’re storytellers dedicated to making
          your wedding memories last forever.
        </p>
      </header>

      <div
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        role="list"
      >
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card3D key={idx} theme={theme}>
              <Icon
                className="w-12 h-12 text-yellow-600"
                aria-hidden="true"
              />
              <h3
                className={`font-bold mt-4 mb-2 text-lg ${themeStyles.cardText}`}
              >
                {item.title}
              </h3>
              <p className={`text-sm ${themeStyles.cardLabel}`}>
                {item.desc}
              </p>
            </Card3D>
          );
        })}
      </div>
    </section>
  );
}


/* "use client";
import { useState } from "react";
import { Users, Camera, Star, Package, PenTool,Heart } from "lucide-react";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";

const features = [
  {
  icon: <Users className="w-12 h-12 text-yellow-600" />,
  title: "Expertise in Indian Weddings",
  desc: "Imagine a team that truly understands the colors, rituals, and emotions of your Indian wedding. We capture not just the events, but the meaning behind every moment, so your memories feel as alive as the day itself.",
},
{
  icon: <PenTool className="w-12 h-12 text-yellow-600" />,
  title: "Personalized Service",
  desc: "Your love story is one of a kind—and your photos should be too. We listen to your vision and craft every shot around your style, making sure your day looks exactly how you’ve always dreamed.",
},
{
  icon: <Camera className="w-12 h-12 text-yellow-600" />,
  title: "High-Quality Equipment",
  desc: "From the sparkle in your eyes to the laughter in the crowd, our state-of-the-art cameras and audio gear ensure every detail is crystal clear, giving you memories you’ll relive for a lifetime.",
},
{
  icon: <Star className="w-12 h-12 text-yellow-600" />,
  title: "Creative Storytelling",
  desc: "Your wedding isn’t just an event—it’s a story. We weave every glance, smile, and ritual into a cinematic journey that feels heartfelt, timeless, and unmistakably yours.",
},
{
  icon: <Package className="w-12 h-12 text-yellow-600" />,
  title: "Comprehensive Packages",
  desc: "From dreamy pre-wedding shoots to the last dance of your big day, our tailored packages give you the freedom to choose exactly what you need—without missing a single magical moment.",
},
{
  icon: <Heart className="w-12 h-12 text-yellow-600" />,
  title: "Seamless Experience",
  desc: "On your wedding day, the only thing you should focus on is each other. We take care of everything behind the lens—quietly, smoothly, and with care—so you can simply live the moment while we preserve it forever.",
},

];

function Card3D({ children, theme }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.3s ease-out",
    });
  };

  return (
    <div
      className="relative p-[3px] rounded-xl overflow-hidden h-[320px] flex"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
    
      <div className="absolute inset-0 bg-[conic-gradient(#EA2027,#FFC312,#12CBC4,#C4E538,#EA2027)] animate-spin-slow"></div>


      <div
        className={`relative flex flex-col justify-center items-center text-center p-6 rounded-xl shadow-lg w-full h-full transition-transform duration-200 ease-out ${
          theme === "dark" ? "bg-gray-900/90" : "bg-white"
        }`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const { theme } = useTheme();

  const themeStyles = {
    section: theme === "dark" ? "bg-gray-950" : "bg-gray-50",
    heading: theme === "dark" ? "text-white" : "text-gray-900",
    subheading: theme === "dark" ? "text-gray-400" : "text-gray-600",
    cardText: theme === "dark" ? "text-white" : "text-gray-900",
    cardLabel: theme === "dark" ? "text-gray-400" : "text-gray-600",
  };

  return (
    <section className={`py-12 text-center ${themeStyles.section}`}>
      <h2 className={`text-3xl font-bold mb-8 ${themeStyles.heading}`}>
        Why Choose <span className="text-yellow-600">Us</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <Card3D key={idx} theme={theme}>
            {item.icon}
            <h3 className={`font-bold mt-4 mb-2 text-lg ${themeStyles.cardText}`}>
              {item.title}
            </h3>
            <p className={`text-sm ${themeStyles.cardLabel}`}>{item.desc}</p>
          </Card3D>
        ))}
      </div>
    </section>
  );
}   */ 