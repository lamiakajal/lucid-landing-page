"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#15171e]/95 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#home" className="inline-flex items-center shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Lucid Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[14px] font-semibold text-white uppercase tracking-wider py-1 group focus:outline-none"
            >
              {item.name}
              {/* Touch, click or hover all trigger the expand */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#008ed6] transition-all duration-600 ease-in-out group-hover:w-full group-focus:w-full group-active:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="lg:hidden text-white p-2 rounded hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#15171e] border-b border-gray-800 ${
          isOpen
            ? "max-h-96 opacity-100 py-4 shadow-xl"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="relative text-sm font-semibold text-gray-200 uppercase tracking-wider py-2 border-b border-gray-800/60 last:border-none group focus:outline-none"
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white group-active:text-[#008ed6]">
                {item.name}
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#008ed6] transition-all duration-500 ease-in-out group-hover:w-full group-active:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
