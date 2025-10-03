import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeStyles = {
    header:
      theme === "dark"
        ? scrolled
          ? "bg-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
        : scrolled
        ? "bg-white/90 backdrop-blur-md shadow-lg"
        : "bg-transparent",
    text: theme === "dark" ? "text-white" : scrolled ? "text-gray-900" : "text-white",
    logo: theme === "dark" ? "text-white" : scrolled ? "text-gray-900" : "text-white",
    mobileMenu: "bg-white/95 dark:bg-gray-900",
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${themeStyles.header}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-between items-center py-4 relative">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-serif font-bold tracking-wider cursor-pointer transition-all duration-300"
          >
            <span className="text-amber-400">Sai</span>
            <span className={themeStyles.logo}>Photography</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <HashLink smooth to="/#home" className={`relative ${themeStyles.text}`}>
              Home
            </HashLink>

            {/* Dropdown on Hover */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`relative ${themeStyles.text} flex items-center`}>
                Our Works ▾
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50"
                  >
                    <li>
                      <Link
                        to="/portfolio"
                        className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/videoplayer"
                        className="block px-4 py-2 hover:bg-amber-400 hover:text-black"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Videos
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <HashLink smooth to="/#about" className={themeStyles.text}>
              About
            </HashLink>
            <HashLink smooth to="/#services" className={themeStyles.text}>
              Services
            </HashLink>
            <HashLink smooth to="/#contact" className={themeStyles.text}>
              Contact
            </HashLink>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-amber-400" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200">
              {theme === "dark" ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-white" />
              )}
            </motion.button>
            <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} className={themeStyles.text}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`md:hidden overflow-hidden ${themeStyles.mobileMenu} rounded-b-lg`}
            >
              <div className="py-4 space-y-4 text-center">
                <HashLink smooth to="/#home" onClick={() => setIsMenuOpen(false)} className="block text-lg">
                  Home
                </HashLink>

                {/* Dropdown inside mobile */}
                <div>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="block w-full text-lg">
                    Our Works ▾
                  </button>
                  {isDropdownOpen && (
                    <div className="space-y-1">
                      <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2">
                        Portfolio
                      </Link>
                      <Link to="/videoplayer" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2">
                        Videos
                      </Link>
                    </div>
                  )}
                </div>

                <HashLink smooth to="/#about" onClick={() => setIsMenuOpen(false)} className="block text-lg">
                  About
                </HashLink>
                <HashLink smooth to="/#services" onClick={() => setIsMenuOpen(false)} className="block text-lg">
                  Services
                </HashLink>
                <HashLink smooth to="/#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg">
                  Contact
                </HashLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
