import React, { useState, memo } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Camera, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Components/Contexts/ThemeContext.jsx";

const contactDetails = [
  { icon: Phone, label: "Call", value: "+91 7092039391", href: "tel:+917092039391" },
  { icon: Mail, label: "Email", value: "saiphotography@gmail.com", href: "mailto:saiphotography@gmail.com" },
  { icon: MapPin, label: "Location", value: "Sellur, Madurai", href: "https://maps.google.com/?q=Sellur, Madurai" },
];

const socialLinks = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com/" },
  { Icon: Camera, label: "Portfolio", href: "#" },
];

const whatsappNumber = "+917092039391"; // your whatsapp number

function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const { theme } = useTheme();

  const themeStyles = {
    section: theme === "dark" ? "bg-black" : "bg-gray-50",
    title: theme === "dark" ? "text-white" : "text-gray-900",
    subtitle: theme === "dark" ? "text-gray-400" : "text-gray-600",
    contactTitle: theme === "dark" ? "text-white" : "text-gray-900",
    contactText: theme === "dark" ? "text-white" : "text-gray-900",
    contactSubtext: theme === "dark" ? "text-gray-400" : "text-gray-600",
    socialBg: theme === "dark" ? "bg-gray-800 hover:bg-amber-400" : "bg-gray-200 hover:bg-amber-400",
    socialIcon: theme === "dark" ? "text-white hover:text-black" : "text-gray-700 hover:text-black",
    formBg: theme === "dark" ? "bg-gray-900" : "bg-white",
    formTitle: theme === "dark" ? "text-white" : "text-gray-900",
    label: theme === "dark" ? "text-gray-400" : "text-gray-700",
    input:
      theme === "dark"
        ? "bg-gray-800 border-gray-700 text-white focus:border-amber-400"
        : "bg-gray-50 border-gray-300 text-gray-900 focus:border-amber-400",
  };

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `
Hi, my name is ${formData.name}.
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Message: ${formData.message}
    `;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);
    setSubmittedData(formData);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`py-20 ${themeStyles.section} relative overflow-hidden transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="contact-heading"
            className={`text-4xl ${themeStyles.title} md:text-5xl font-serif font-bold mb-6`}
          >
            Let’s Create{" "}
            <motion.span
              className="text-amber-400 inline-block"
              animate={{
                textShadow: [
                  "0 0 10px rgba(251,191,36,0.5)",
                  "0 0 20px rgba(251,191,36,0.8)",
                  "0 0 10px rgba(251,191,36,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Magic
            </motion.span>{" "}
            Together
          </h2>
          <p className={`text-xl ${themeStyles.subtitle} max-w-2xl mx-auto leading-relaxed`}>
            Ready to capture your special moments? Get in touch and let’s bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-3xl font-serif font-bold mb-8 ${themeStyles.contactTitle}`}>
              Get in Touch
            </h3>
            <div className="space-y-6 mb-12">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center">
                  <div className="bg-amber-400 p-3 rounded-full mr-4 shadow-lg" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className={`${themeStyles.contactSubtext} text-sm`}>{label}</p>
                    <a
                      href={href}
                      className={`${themeStyles.contactText} font-medium text-lg hover:underline`}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
        {/*     <div className="flex space-x-4">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${themeStyles.socialBg} p-3 rounded-full ${themeStyles.socialIcon}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div> */}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`${themeStyles.formBg} p-8 rounded-2xl shadow-xl border ${
              theme === "light" ? "border-gray-200" : "border-gray-800"
            } max-w-md mx-auto`}
          >
            {isSubmitted ? (
              <div className="text-center py-12" aria-live="polite">
                <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                <h3 className={`text-2xl font-bold mb-2 ${themeStyles.formTitle}`}>Thank You!</h3>
                <p className={themeStyles.subtitle}>
                  We’ve received your request. We’ll contact you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={themeStyles.label}>
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full ${themeStyles.input} px-4 py-3 rounded-lg border`}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={themeStyles.label}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full ${themeStyles.input} px-4 py-3 rounded-lg border`}
                  />
                </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className={themeStyles.label}>
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className={`w-full ${themeStyles.input} px-4 py-3 rounded-lg border`}
                    >
                      <option value="">Select</option>
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="portrait">Portrait</option>
                      <option value="family">Family</option>
                      <option value="corporate">Corporate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" className={themeStyles.label}>
                      Event Date *
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                      className={`w-full ${themeStyles.input} px-4 py-3 rounded-lg border`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={themeStyles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    className={`w-full ${themeStyles.input} px-4 py-3 rounded-lg border`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-400 text-black py-3 rounded-lg font-bold hover:bg-amber-300 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Submitted Data Table */}
        {submittedData && (
          <div className="mt-12 overflow-x-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Submitted Details</h3>
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">Name</td>
                  <td className="px-4 py-2">{submittedData.name}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">Phone</td>
                  <td className="px-4 py-2">{submittedData.phone}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">Event Type</td>
                  <td className="px-4 py-2">{submittedData.eventType}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">Event Date</td>
                  <td className="px-4 py-2">{submittedData.eventDate}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Message</td>
                  <td className="px-4 py-2">{submittedData.message}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(ContactComponent);
