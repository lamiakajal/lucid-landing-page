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
      if (window.scrollY > 50) {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-[#15171e]/90 backdrop-blur-md shadow-lg shadow-black/20 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="w-full max-w-350 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Image Logo */}
        <Link href="#home" className="flex items-center">
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
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[13px] xl:text-[14px] font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#008ed6] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200"
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
        <div className="flex flex-col space-y-3 px-6 sm:px-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-[#008ed6] transition-colors py-2 border-b border-gray-800/60 last:border-none"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
