import React from "react";
import bg from "../Components/images/ep012.jpg";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";

const Cover = () => {
  const { theme } = useTheme();

  const themeStyles = {
    section: theme === "dark" ? "bg-gray-900" : "bg-gray-50",
    title: theme === "dark" ? "text-white" : "text-gray-900",
    subtitle: theme === "dark" ? "text-gray-400" : "text-gray-600",
    card: theme === "dark" ? "bg-gray-800" : "bg-white",
    cardText: theme === "dark" ? "text-white" : "text-gray-900",
    categoryActive: "bg-amber-400 text-black",
    categoryInactive:
      theme === "dark"
        ? "text-gray-400 border-gray-600 hover:text-white hover:border-amber-400"
        : "text-gray-600 border-gray-300 hover:text-gray-900 hover:border-amber-400",
  };

  return (
    <div
      className="w-screen h-[60vh] md:h-[80vh] lg:h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h5 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-white drop-shadow-lg tracking-wide text-center max-w-4xl">
{/*       “Every glance, every smile, every tear — we don’t just capture moments, we preserve the emotions that make your story timeless.”

“More than photos, we create living memories — a journey back to the laughter, love, and magic of your wedding day.”
 */}
“We don’t just see faces, we see feelings — turning fleeting moments into forever treasures.”
      </h5>
    </div>
  );
};

export default Cover;
