import React from "react";
import { Award, Heart, Camera, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";
import sonai from "../Components/Photo/sonai.jpg";

const About = () => {
  const { theme } = useTheme();

  const achievements = [
    { icon: <Award aria-hidden="true" className="text-amber-400" size={28} />, value: "500+", label: "Happy Clients" },
    { icon: <Heart aria-hidden="true" className="text-amber-400" size={28} />, value: "200+", label: "Weddings Captured" },
    { icon: <Camera aria-hidden="true" className="text-amber-400" size={28} />, value: "10K+", label: "Photos Taken" },
    { icon: <Users aria-hidden="true" className="text-amber-400" size={28} />, value: "5+", label: "Years Experience" },
  ];

  const themeStyles = {
    section: theme === "dark" ? "bg-gray-950" : "bg-gray-50",
    heading: theme === "dark" ? "text-white" : "text-gray-900",
    subheading: theme === "dark" ? "text-gray-400" : "text-gray-600",
    cardBg: theme === "dark" ? "bg-gray-900/50 hover:bg-amber-400/10" : "bg-white/50 hover:bg-amber-400/10",
    cardText: theme === "dark" ? "text-white" : "text-gray-900",
    cardLabel: theme === "dark" ? "text-gray-400" : "text-gray-600",
    quoteBg: "bg-amber-400 text-black",
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${themeStyles.section}`}
    >
      {/* Decorative background glows */}
      <div aria-hidden="true" className="absolute -top-35 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div aria-hidden="true" className="absolute bottom-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2
              id="about-heading"
              className={`text-4xl md:text-5xl font-serif font-bold mb-6 leading-snug ${themeStyles.heading}`}
            >
              Meet the Eye Behind <span className="text-amber-400">the Camera</span>
            </h2>
            <p className={`text-lg mb-8 leading-relaxed ${themeStyles.subheading}`}>
              I&apos;m a passionate photographer who believes every moment has a story worth telling. With over five years of experience capturing life’s most precious memories, I specialize in timeless images that speak to the soul.
            </p>

            <div className="space-y-8 mb-10">
              <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-lg transition ${themeStyles.cardBg}`}>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${themeStyles.cardText}`}>My Philosophy</h3>
                <p className={`leading-relaxed ${themeStyles.subheading}`}>
                  Photography is not just about capturing what you see, but revealing what you feel. Every click is guided by emotion, authenticity, and the pursuit of that perfect moment.
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className={`p-4 rounded-lg transition ${themeStyles.cardBg}`}>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${themeStyles.cardText}`}>My Style</h3>
                <p className={`leading-relaxed ${themeStyles.subheading}`}>
                  I blend cinematic storytelling with candid authenticity. My work focuses on natural light, genuine emotions, and creating a comfortable environment where your true self shines through.
                </p>
              </motion.div>
            </div>

            {/* Achievements (semantic dl) */}
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-4 rounded-lg transition cursor-pointer ${themeStyles.cardBg}`}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-3">{achievement.icon}</div>
                  <dt className={`sr-only`}>{achievement.label}</dt>
                  <dd className={`text-2xl font-bold mb-1 ${themeStyles.cardText}`}>{achievement.value}</dd>
                  <dd className={`text-sm ${themeStyles.cardLabel}`}>{achievement.label}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              <img
                src={sonai}
                alt="Portrait of Sonai, professional photographer"
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>

              {/* Floating Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className={`absolute -bottom-6 -left-6 p-6 rounded-lg shadow-xl max-w-xs ${themeStyles.quoteBg}`}
              >
                <p className="font-bold italic text-sm mb-2">
                  &quot;Photography is the story I fail to put into words.&quot;
                </p>
                <cite className="text-xs font-medium not-italic">– Destin Sparks</cite>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
