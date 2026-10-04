"use client";

import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [isHovered, setIsHovered] = useState(false);

  const plans = [
    {
      id: 1,
      name: "FREE",
      price: "0",
      period: "/per month",
      desc: "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetu",
    },
    {
      id: 2,
      name: "PERSONAL",
      price: "25",
      period: "/per month",
      desc: "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetu",
    },
    {
      id: 3,
      name: "BUSINESS",
      price: "50",
      period: "/per month",
      desc: "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetu",
    },
    {
      id: 4,
      name: "UNLIMITED",
      price: "99",
      period: "/per month",
      desc: "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetu",
    },
  ];

  return (
    <section
      id="pricing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      className="py-24 sm:py-28 lg:py-32 bg-white scroll-mt-20 border-b border-[#d1d5db] transition-colors select-none"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-[#008ed6] text-[13px] font-bold uppercase tracking-wider block mb-3">
            QUALITY HAS ITS PRICE
          </span>

          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1a1a] tracking-tight pb-3 sm:pb-4">
              Pricings & Plans
            </h2>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#008ed6] transition-transform duration-600 ease-in-out origin-center pointer-events-none ${
                isHovered ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="group flex flex-col justify-between bg-white border border-gray-200 rounded-sm text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-[#008ed6]"
            >
              <div>
                {/* Plan Header */}
                <div className="py-6 border-b border-gray-100 transition-colors">
                  <h3 className="text-[17px] font-bold tracking-wider text-[#1a1a1a] uppercase group-hover:text-[#008ed6] transition-colors duration-300">
                    {plan.name}
                  </h3>
                </div>

                {/* Price Display: Majhkhan theke duipashe blue expand hobe */}
                <div className="relative py-8 sm:py-10 border-b border-gray-100 bg-[#fafafa]/70 overflow-hidden">
                  {/* Center-outward blue expanding background */}
                  <span className="absolute inset-0 bg-[#008ed6] transform scale-x-0 origin-center transition-transform duration-500 ease-out group-hover:scale-x-100 pointer-events-none"></span>

                  <div className="relative z-10">
                    <div className="flex justify-center items-start text-[#1a1a1a] transition-colors duration-300 group-hover:text-white">
                      <span className="text-2xl font-bold mt-1 mr-0.5">$</span>
                      <span className="text-5xl lg:text-6xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-[13px] mt-2 font-normal transition-colors duration-300 group-hover:text-white/90">
                      {plan.period}
                    </p>
                  </div>
                </div>

                {/* Plan Description */}
                <div className="p-6 sm:p-7">
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    {plan.desc}
                  </p>
                </div>
              </div>

              {/* Order Button: Button-er moddheo majhkhan theke duipashe expand animation */}
              <div className="p-6 pt-0">
                <Link
                  href="#contact"
                  className="relative group/btn overflow-hidden block w-full py-2.5 px-4 text-[13px] font-bold text-[#008ed6] uppercase tracking-wider border border-[#008ed6] rounded-xs transition-colors duration-300"
                >
                  {/* Center-outward expanding fill layer */}
                  <span className="absolute inset-0 bg-[#008ed6] transform scale-x-0 origin-center transition-transform duration-300 ease-out group-hover/btn:scale-x-100 pointer-events-none"></span>

                  {/* Button Label */}
                  <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
                    ORDER NOW
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
