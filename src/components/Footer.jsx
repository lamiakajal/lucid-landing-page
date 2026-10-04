import Link from "next/link";
import {
  FaBehance,
  FaDribbble,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { id: 1, icon: <FaBehance />, href: "https://behance.net" },
    { id: 2, icon: <FaDribbble />, href: "https://dribbble.com" },
    { id: 3, icon: <FaTwitter />, href: "https://twitter.com" },
    { id: 4, icon: <FaFacebookF />, href: "https://facebook.com" },
    { id: 5, icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-[#15171e] py-12 border-t border-white/5 select-none">
      <div className="container mx-auto px-4 text-center">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-5">
          {socialLinks.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-[#008ed6] text-lg sm:text-xl transition-all duration-300 hover:-translate-y-1 inline-block"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-[#666666] text-xs sm:text-[13px] tracking-wide font-normal">
          copyright &copy; Design By LAMIA KAJAL
        </p>
      </div>
    </footer>
  );
}
