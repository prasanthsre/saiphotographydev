import React, { memo } from "react";
import { Check, Camera, Heart, Briefcase, Flower, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx"; // fixed import path

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: <Heart className="text-amber-400" size={32} aria-hidden="true" />,
      title: "Wedding Photography",
      description: "Capture your special day with timeless elegance and romantic storytelling.",
      features: ["8+ Hours Coverage", "Engagement Session", "500+ Edited Photos", "Online Gallery"],
      price: "Starting from $2,500",
      popular: true,
    },
    {
      icon: <Camera className="text-amber-400" size={32} aria-hidden="true" />,
      title: "Portrait Sessions",
      description: "Professional headshots and personal portraits that capture your essence.",
      features: ["1-2 Hours Session", "Multiple Outfits", "50+ Edited Photos", "Print Release"],
      price: "Starting from $350",
      popular: false,
    },
    {
      icon: <Briefcase className="text-amber-400" size={32} aria-hidden="true" />,
      title: "Corporate Events",
      description: "Document your business milestones and corporate gatherings professionally.",
      features: ["Full Event Coverage", "Same Day Highlights", "Professional Editing", "Quick Turnaround"],
      price: "Starting from $800",
      popular: false,
    },
    {
      icon: <Flower className="text-amber-400" size={32} aria-hidden="true" />,
      title: "Family Sessions",
      description: "Celebrate your family bonds with warm, natural lifestyle photography.",
      features: ["1 Hour Session", "Multiple Locations", "75+ Edited Photos", "Print Package"],
      price: "Starting from $450",
      popular: false,
    },
  ];

  const themeStyles = {
    section: theme === "dark" ? "bg-gray-950" : "bg-white",
    title: theme === "dark" ? "text-white" : "text-gray-900",
    subtitle: theme === "dark" ? "text-gray-400" : "text-gray-600",
    card: theme === "dark" ? "bg-gray-900" : "bg-gray-50",
    cardBorder: theme === "dark" ? "border-gray-700" : "border-gray-200",
    cardTitle: theme === "dark" ? "text-white" : "text-gray-900",
    cardText: theme === "dark" ? "text-gray-300" : "text-gray-600",
    cardDescription: theme === "dark" ? "text-gray-400" : "text-gray-500",
    price: theme === "dark" ? "text-white" : "text-gray-900",
    infoText: theme === "dark" ? "text-gray-400" : "text-gray-600",
    customButton: theme === "dark" ? "text-amber-400 hover:text-white" : "text-amber-600 hover:text-amber-700",
  };

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className={`py-20 ${themeStyles.section} relative overflow-hidden transition-colors duration-500`}
    >
      {/* Background Pattern (decorative, hidden from screen readers) */}
      <div aria-hidden="true" className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${
              theme === "dark" ? "rgba(251, 191, 36, 0.1)" : "rgba(251, 191, 36, 0.05)"
            } 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="services-title"
            className={`text-4xl md:text-5xl font-serif font-bold mb-6 ${themeStyles.title}`}
          >
            Photography{" "}
            <motion.span
              className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Packages
            </motion.span>
          </h2>
          <p className={`text-xl ${themeStyles.subtitle} max-w-2xl mx-auto leading-relaxed`}>
            Choose the perfect package for your special moments. Each service is tailored to create memories that last forever.
          </p>
        </motion.header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              aria-label={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`relative ${themeStyles.card} p-8 rounded-2xl shadow-lg transition-all duration-300 group border ${
                service.popular ? "border-2 border-amber-400 shadow-amber-400/30" : themeStyles.cardBorder
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <motion.div
                      aria-hidden="true"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Star size={16} className="mr-1" />
                    </motion.div>
                    MOST POPULAR
                  </div>
                </motion.div>
              )}

              {/* Icon + Title */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 ${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-full shadow-inner border-2 border-amber-400/20`}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className={`text-2xl font-serif font-bold mb-3 ${themeStyles.cardTitle} group-hover:text-amber-400 transition-colors`}>
                  {service.title}
                </h3>
                <p className={`${themeStyles.cardDescription} text-sm leading-relaxed`}>
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-center text-sm"
                  >
                    <Check className="text-amber-400 mr-3 flex-shrink-0" size={16} aria-hidden="true" />
                    <span className={themeStyles.cardText}>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Price + Button */}
              <div className="text-center">
                <motion.div whileHover={{ scale: 1.05 }} className={`text-2xl font-bold ${themeStyles.price} mb-4`}>
                  {service.price}
                </motion.div>
                <motion.button
                  aria-label={`Book ${service.title}`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      theme === "dark"
                        ? "0 0 20px rgba(251, 191, 36, 0.6)"
                        : "0 10px 25px rgba(251, 191, 36, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 font-semibold tracking-wider rounded-lg transition-all duration-300 group flex items-center justify-center ${
                    service.popular
                      ? "bg-amber-400 text-black hover:bg-amber-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      : `border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black ${
                          theme === "light" ? "hover:shadow-lg" : ""
                        } focus:ring-2 focus:ring-amber-500 focus:outline-none`
                  }`}
                >
                  Book {service.title}
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`${themeStyles.infoText} mb-4`}>
            All packages include professional editing, online gallery, and print release.
          </p>
          <motion.button
            aria-label="Request a custom photography package"
            whileHover={{ scale: 1.05, x: 5 }}
            className={`${themeStyles.customButton} transition-all duration-300 font-medium flex items-center mx-auto group focus:outline-none focus:ring-2 focus:ring-amber-500`}
          >
            Custom packages available — Let's discuss your needs
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Services);
