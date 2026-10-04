"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaTrophy,
  FaMousePointer,
  FaBolt,
  FaTachometerAlt,
} from "react-icons/fa";

export default function DeviceShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  const detailPoints = [
    {
      id: 1,
      title: "Awesome Design",
      icon: <FaTrophy className="w-4 h-4 text-[#008ed6]" />,
    },
    {
      id: 2,
      title: "Fully Responsive",
      icon: <FaMousePointer className="w-4 h-4 text-[#008ed6]" />,
    },
    {
      id: 3,
      title: "Retina Ready",
      icon: <FaBolt className="w-4 h-4 text-[#008ed6]" />,
    },
    {
      id: 4,
      title: "Tons Of Features And Easy To Use",
      icon: <FaTachometerAlt className="w-4 h-4 text-[#008ed6]" />,
    },
  ];

  return (
    <section
      id="about"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      className="py-24 sm:py-28 lg:py-32 bg-white scroll-mt-20 border-b border-[#d1d5db] transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Content: Mobile-e center, Desktop-e (lg) left */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-[#008ed6] text-[13px] font-bold uppercase tracking-wider block mb-3 select-none">
            DIP INTO THE DETAILS
          </span>

          {/* Heading with Center-outwards underline animation */}
          <div className="relative inline-block select-none mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] tracking-tight pb-3 sm:pb-4">
              Beautiful on every device
            </h2>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#008ed6] transition-transform duration-600 ease-in-out origin-center pointer-events-none ${
                isHovered ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>

          {/* Readable Paragraph: mx-auto diye mobile-e center align kora hoyeche */}
          <p className="text-[#777777] text-[17px] sm:text-[18px] leading-[1.75] max-w-xl mx-auto lg:mx-0 mb-10">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
          </p>

          {/* Feature List: Mobile-e items-center/start adjust kora hoyeche */}
          <div className="flex flex-col space-y-5 items-start">
            {detailPoints.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3.5 group cursor-pointer"
              >
                <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-[16px] sm:text-[17px] font-medium text-[#222222] group-hover:text-[#008ed6] transition-colors duration-200">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Showcase */}
        <div className="relative flex justify-center items-center lg:justify-end mt-12 sm:mt-16 lg:mt-0">
          <Image
            src="/assets/lucid.png"
            alt="Lucid Devices Showcase"
            width={580}
            height={600}
            className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
