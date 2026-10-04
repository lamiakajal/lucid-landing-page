"use client";

import { useState } from "react";
import Image from "next/image";

export default function Customization() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="customization"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      className="py-24 sm:py-28 lg:py-32 bg-[#f4f4f4] scroll-mt-20 border-b border-[#d1d5db] transition-colors overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-[#008ed6] text-[13px] font-bold uppercase tracking-wider block mb-3 select-none">
            DIP INTO THE DETAILS
          </span>

          {/* Title Wrapper with Center-outward Underline Animation */}
          <div className="relative inline-block select-none mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] tracking-tight pb-3 sm:pb-4">
              Super easy to customize
            </h2>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#008ed6] transition-transform duration-600 ease-in-out origin-center pointer-events-none ${
                isHovered ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>

          {/* Paragraph */}
          <p className="text-[#777777] text-[17px] sm:text-[18px] leading-[1.8] max-w-xl mx-auto lg:mx-0">
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </p>
        </div>

        {/* Right Column Showcase - lucid2.png */}
        <div className="relative flex justify-center items-center lg:justify-end mt-8 lg:mt-0">
          <Image
            src="/assets/lucid2.png"
            alt="Lucid Customization Showcase"
            width={580}
            height={520}
            className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
