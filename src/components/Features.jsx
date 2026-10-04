"use client";

import { useState } from "react";

export default function Features() {
  const [isHovered, setIsHovered] = useState(false);

  const featureList = [
    {
      id: 1,
      title: "Responsive",
      description:
        "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Customizable",
      description:
        "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Lovely Design",
      description:
        "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.25M6.633 10.5V20.25m0-9.75H3.75A2.25 2.25 0 001.5 13v5.25a2.25 2.25 0 002.25 2.25h2.883"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Mobile Friendly",
      description:
        "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      className="py-24 sm:py-28 lg:py-32 bg-white scroll-mt-20 border-b border-[#d1d5db] transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Heading Area */}
        <div className="text-center mb-20 sm:mb-24 lg:mb-28">
          <span className="text-[#008ed6] text-[13px] font-bold uppercase tracking-wider block mb-3 select-none">
            PRODUCT OVERVIEW
          </span>

          {/* Title Wrapper */}
          <div className="relative inline-block select-none">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] tracking-tight pb-3 sm:pb-4">
              List of amazing features
            </h2>

            {/* Center-outwards underline animation */}
            <span
              className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#008ed6] transition-transform duration-600 ease-in-out origin-center pointer-events-none ${
                isHovered ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-14 text-center">
          {featureList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center group cursor-pointer p-4 rounded-lg transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Rounded Circle Icon */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border border-gray-200 flex items-center justify-center text-[#008ed6] mb-6 transition-all duration-300 ease-out group-hover:border-[#008ed6] group-hover:bg-[#008ed6] group-hover:text-white group-active:scale-95 shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-[19px] font-bold text-[#1a1a1a] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#999999] text-[14px] sm:text-[15px] leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
