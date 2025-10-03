import React from "react";
import { Instagram, Facebook, Camera, Mail, Phone, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";

const Footer = () => {
  const { theme } = useTheme();

  const themeStyles = {
    footer: theme === "dark" ? "bg-white" : "bg-black",
    brand: theme === "dark" ? "text-black" : "text-white",
    description: theme === "dark" ? "text-gray-700" : "text-gray-300",
    title: theme === "dark" ? "text-black" : "text-white",
    text: theme === "dark" ? "text-gray-700" : "text-gray-300",
    link: theme === "dark" ? "text-gray-700 hover:text-amber-400" : "text-gray-300 hover:text-amber-400",
    border: theme === "dark" ? "border-gray-300" : "border-gray-700",
    copyright: theme === "dark" ? "text-gray-500" : "text-gray-400",
    socialBg: theme === "dark" ? "bg-gray-200 hover:bg-amber-400" : "bg-gray-700 hover:bg-amber-400",
    socialIcon: theme === "dark" ? "text-black hover:text-white" : "text-gray-300 hover:text-black",
    gradient: "from-amber-400 via-pink-500 to-amber-400",
  };

  return (
    <footer className={`${themeStyles.footer} relative overflow-hidden`} role="contentinfo">
      {/* Top animated border */}
      <motion.div
        className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${themeStyles.gradient}`}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ backgroundSize: "200% 100%" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-serif font-bold tracking-wider mb-4"
            >
              <span className="text-amber-400">Sai</span>
              <span className={themeStyles.brand}>Photography</span>
            </motion.h2>
            <p className={`${themeStyles.description} leading-relaxed mb-6 max-w-md`}>
              Capturing life's most precious moments with artistic vision and professional excellence.
              Your memories, our passion.
            </p>

            <div className="flex space-x-4">
              {[
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { Icon: Camera, label: "Portfolio", href: "#" },
              ].map(({ Icon, label, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`${themeStyles.socialBg} p-3 rounded-full ${themeStyles.socialIcon} transition-all duration-300 shadow-lg`}
                >
                  <Icon size={20} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            aria-label="Footer Navigation"
          >
            <h3 className={`${themeStyles.title} font-bold text-lg mb-4`}>Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`${themeStyles.link} transition-all duration-300 text-sm flex items-center group`}
                  >
                    <span
                      className="w-0 h-[1px] bg-amber-400 mr-2 group-hover:w-4 transition-all duration-300"
                      aria-hidden="true"
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact Info */}
          <motion.address
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="not-italic"
          >
            <h3 className={`${themeStyles.title} font-bold text-lg mb-4`}>Contact Info</h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "+91 7092039391", href: "tel:+917092039391" },
                { icon: Mail, text: "saiphotography@gmail.com", href: "mailto:saiphotography@gmail.com" },
                { icon: MapPin, text: "Sellur, Madurai", href: "https://maps.google.com/?q=Sellur, Madurai" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`flex items-center ${themeStyles.text} group transition-colors`}
                  >
                    <item.icon
                      size={16}
                      className="mr-3 text-amber-400 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <span className="text-sm group-hover:text-amber-400">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.address>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={`border-t ${themeStyles.border} pt-8 mt-12`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${themeStyles.copyright} text-sm`}>
              © {new Date().getFullYear()} SaiPhotography. All rights reserved.
            </p>

            <p className={`text-sm ${themeStyles.text} text-center`}>
              Developed with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500 inline-block"
              >
                <Heart size={14} className="inline" fill="currentColor" aria-hidden="true" />
              </motion.span>{" "}
              by{" "}
              <span className="font-semibold bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
                Prasanth
              </span>
            </p>

            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className={`${themeStyles.link} transition-all duration-300`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
