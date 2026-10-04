"use client";

import { useState } from "react";
import { FaMobileAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      className="relative bg-[#f4f5f7] pt-24 sm:pt-28 select-none"
    >
      <style jsx global>{`
        @keyframes ultraSmoothFloat {
          0% {
            transform: translate3d(0, 0px, 0);
          }
          50% {
            transform: translate3d(0, -16px, 0);
          }
          100% {
            transform: translate3d(0, 0px, 0);
          }
        }
        .animate-floating {
          animation: ultraSmoothFloat 6s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        .animate-floating:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-20">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-[#008ed6] text-[13px] font-bold uppercase tracking-wider block mb-3">
            STAY IN TOUCH
          </span>

          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] tracking-tight pb-3 sm:pb-4">
              Contact us
            </h2>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#008ed6] transition-transform duration-600 ease-in-out origin-center pointer-events-none ${
                isHovered ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="flex flex-col items-center group cursor-default">
            <div className="w-12 h-12 flex items-center justify-center text-[#008ed6] text-2xl mb-3 transition-transform duration-300 group-hover:-translate-y-1.5">
              <FaMobileAlt />
            </div>
            <p className="text-[#777777] text-[14px] leading-relaxed">Phone: (415) 124-5678</p>
            <p className="text-[#777777] text-[14px] leading-relaxed">Fax: (412) 123-8290</p>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <div className="w-12 h-12 flex items-center justify-center text-[#008ed6] text-2xl mb-3 transition-transform duration-300 group-hover:-translate-y-1.5">
              <FaMapMarkerAlt />
            </div>
            <p className="text-[#777777] text-[14px] leading-relaxed">1001 Brickell Bay Dr.</p>
            <p className="text-[#777777] text-[14px] leading-relaxed">Suite 1900</p>
            <p className="text-[#777777] text-[14px] leading-relaxed">Miami, FL 33131</p>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <div className="w-12 h-12 flex items-center justify-center text-[#008ed6] text-2xl mb-3 transition-transform duration-300 group-hover:-translate-y-1.5">
              <FaEnvelope />
            </div>
            <p className="text-[#777777] text-[14px] leading-relaxed">support@yourname.com</p>
          </div>
        </div>

        <div className="relative z-30 max-w-3xl mx-auto -mb-36 sm:-mb-44 animate-floating">
          <div className="bg-[#15171e] text-white p-6 sm:p-10 md:p-12 rounded-sm border border-white/10 shadow-2xl transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="*Name"
                    required
                    className="w-full bg-[#1b1e26] border border-gray-700/60 rounded-xs px-4 py-3 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#008ed6] focus:ring-1 focus:ring-[#008ed6] transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="*Email"
                    required
                    className="w-full bg-[#1b1e26] border border-gray-700/60 rounded-xs px-4 py-3 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#008ed6] focus:ring-1 focus:ring-[#008ed6] transition-all duration-300"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="*Subject"
                    required
                    className="w-full bg-[#1b1e26] border border-gray-700/60 rounded-xs px-4 py-3 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#008ed6] focus:ring-1 focus:ring-[#008ed6] transition-all duration-300"
                  />
                </div>

                <div className="h-full">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="*Message"
                    rows={5}
                    required
                    className="w-full h-full min-h-35 md:min-h-full bg-[#1b1e26] border border-gray-700/60 rounded-xs p-4 text-sm text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#008ed6] focus:ring-1 focus:ring-[#008ed6] transition-all duration-300 resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="relative group/btn overflow-hidden w-full md:w-auto px-10 py-3 text-sm font-semibold tracking-wider text-white bg-[#008ed6] rounded-xs cursor-pointer shadow-md transition-all duration-300 active:scale-95"
                >
                  <span className="absolute inset-0 bg-[#0074b0] transform scale-x-0 origin-center transition-transform duration-300 ease-out group-hover/btn:scale-x-100 pointer-events-none"></span>
                  <span className="relative z-10">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-115 sm:h-125 relative z-10 pt-20">
        <iframe
          title="Google Map Satellite"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116923.49397621217!2d90.3443647!3d23.7806365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "contrast(1.15) saturate(1.15)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full object-cover"
        ></iframe>
      </div>
    </section>
  );
}