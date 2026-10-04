"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideGroups = [
    [
      {
        id: 1,
        quote:
          "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
        name: "Dean Winchester",
        role: "UX DESIGNER, GOOGLE INC.",
        avatar: "/assets/cmnt1.png",
      },
      {
        id: 2,
        quote:
          'Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. "When we come to you," said they to the Sea.',
        name: "John Doe",
        role: "CEO, THE RIVERS COMPANY",
        avatar: "/assets/cmnt2.png",
      },
    ],
    [
      {
        id: 3,
        quote:
          "Design is not just what it looks like and feels like. Design is how it works. Lucid theme made our workflow incredibly smooth and effortless.",
        name: "Sarah Connor",
        role: "PRODUCT LEAD, TECHCORP",
        avatar: "/assets/cmnt1.png",
      },
      {
        id: 4,
        quote:
          "Simplicity is the ultimate sophistication. Finding a clean, highly performant template like this saved us weeks of development time.",
        name: "Michael Scott",
        role: "FOUNDER, PAPERLESS",
        avatar: "/assets/cmnt2.png",
      },
    ],
    [
      {
        id: 5,
        quote:
          "The responsiveness across all screen sizes is top-tier. Our conversion rates improved immediately after switching to this design.",
        name: "Elena Gilbert",
        role: "MARKETING HEAD, MYSTIC LABS",
        avatar: "/assets/cmnt1.png",
      },
      {
        id: 6,
        quote:
          "Clean code, exceptional typography, and pixel-perfect layouts. It's rare to see this level of polish in landing page templates.",
        name: "Bruce Wayne",
        role: "TECH INVESTOR, WAYNE ENT.",
        avatar: "/assets/cmnt2.png",
      },
    ],
    [
      {
        id: 7,
        quote:
          "Everything feels super intuitive to customize. The animations are subtle yet catchy enough to keep users engaged on the page.",
        name: "Diana Prince",
        role: "CREATIVE DIRECTOR, THEMYSCIRA",
        avatar: "/assets/cmnt1.png",
      },
      {
        id: 8,
        quote:
          "Customer feedback on our new portal has been overwhelmingly positive. Outstanding layout structure and clean asset delivery.",
        name: "Arthur Dent",
        role: "CO-FOUNDER, GALAXY HITCH",
        avatar: "/assets/cmnt2.png",
      },
    ],
  ];

  // Faster auto-slide interval (2.8 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideGroups.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused, slideGroups.length]);

  return (
    <section
      id="testimonials"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPaused(false);
      }}
      onTouchStart={() => setIsHovered(true)}
      className="relative py-24 sm:py-28 lg:py-32 overflow-hidden select-none"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/testimonial.png"
          alt="Testimonials background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Heading Area */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-[#008ed6] text-[13px] font-bold uppercase tracking-wider block mb-3">
            QUALITY HAS ITS PRICE
          </span>

          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight pb-3 sm:pb-4 drop-shadow-md">
              Clients Testimonials
            </h2>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#008ed6] transition-transform duration-500 ease-in-out origin-center pointer-events-none ${
                isHovered ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>
        </div>

        {/* Carousel Viewport: Snappy & Fast transition (duration-400 ease-out) */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-400 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slideGroups.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 px-2"
              >
                {group.map((item) => (
                  <div key={item.id} className="flex flex-col justify-between">
                    <p className="text-gray-100 italic text-[16px] sm:text-[17px] leading-[1.8] mb-6 drop-shadow-sm font-light">
                      “{item.quote}”
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/40 shadow-md shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-[15px] sm:text-[16px] drop-shadow-sm">
                          {item.name}
                        </h4>
                        <span className="text-[#008ed6] text-[12px] font-semibold tracking-wider uppercase block drop-shadow-xs">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Slider Pagination Dots */}
        <div className="flex justify-center items-center space-x-3 pt-12">
          {slideGroups.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentSlide(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`rounded-full transition-all duration-200 cursor-pointer ${
                currentSlide === dotIndex
                  ? "w-3 h-3 bg-white scale-125 shadow-md"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
