import React, { memo } from "react";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";

// Lucide Icons
import { Heart, Users, Briefcase, Camera, Box } from "lucide-react";

// Example imported image
import MG01 from "../Components/Images/mg0017.jpg";
import BY01 from "../Components/Images/by02.jpg";

const services = [
  { 
    title: "Couple Portraits", 
    desc: "Capture your love story with intimate, beautiful couple portraits.", 
    img: MG01,
    icon: <Heart className="w-10 h-10 text-yellow-600" />,
    label: "Couple portraits icon" 
  },
  { 
    title: "Baby Portraits", 
    desc: "Timeless memories with adorable baby portraits.", 
    img: BY01,
    icon: null,
    label: "Baby icon" 
  },
  { 
    title: "Family Portraits", 
    desc: "Celebrate your family bond with stunning portraits.", 
    img: null,
    icon: <Users className="w-10 h-10 text-yellow-600" />,
    label: "Family icon" 
  },
  { 
    title: "Product Shoot", 
    desc: "Professional shoots to highlight product details.", 
    img: null,
    icon: <Box className="w-10 h-10 text-yellow-600" />,
    label: "Product box icon" 
  },
  { 
    title: "Corporate Portraits", 
    desc: "Enhance your image with professional corporate portraits.", 
    img: null,
    icon: <Briefcase className="w-10 h-10 text-yellow-600" />,
    label: "Briefcase icon" 
  },
  { 
    title: "Modeling Shoot", 
    desc: "Highlight your unique style with professional modeling shoots.", 
    img: null,
    icon: <Camera className="w-10 h-10 text-yellow-600" />,
    label: "Camera icon" 
  },
];

function ServicesCardComponent() {
  const { theme } = useTheme();

  const themeStyles = {
    section: theme === "dark" ? "bg-gray-950" : "bg-gray-50",
    heading: theme === "dark" ? "text-white" : "text-gray-900",
    cardFront: theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900",
    cardBack: theme === "dark" ? "bg-amber-500 text-black" : "bg-yellow-600 text-white",
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`py-12 text-center transition-colors duration-500 ${themeStyles.section}`}
    >
      <h2
        id="services-heading"
        className={`text-3xl md:text-4xl font-bold mb-10 ${themeStyles.heading}`}
      >
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map((s) => (
          <article 
            key={s.title} 
            className="group [perspective:1000px] w-full h-64 focus-within:[transform:rotateY(180deg)]"
          >
            <div
              className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] focus-within:[transform:rotateY(180deg)] rounded-xl"
            >
              {/* Front Side */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center shadow-lg rounded-xl p-6 backface-hidden ${themeStyles.cardFront}`}
              >
                <div
                  className="w-60 h-70 flex items-center justify-center border-2 border-yellow-600 rounded-full mx-auto mb-4 overflow-hidden"
                  role="img"
                  aria-label={s.label}
                >
                  {s.img ? (
                    <img 
                      src={s.img} 
                      alt={s.label} 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  ) : (
                    s.icon
                  )}
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
              </div>

              {/* Back Side */}
              <div
                className={`absolute inset-0 flex items-center justify-center rounded-xl p-6 [transform:rotateY(180deg)] backface-hidden ${themeStyles.cardBack}`}
              >
                <p className="text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export const ServicesCard = memo(ServicesCardComponent);
