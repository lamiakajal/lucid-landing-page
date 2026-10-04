import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-black py-8 sm:py-10 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Heading */}
        <h3 className="text-white text-xl sm:text-2xl font-light">
          <span className="font-bold">Like what you see?</span> Get this great
          theme now!
        </h3>

        {/* Right Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#download"
            className="px-6 py-2.5 text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider border border-white/40 hover:bg-[#008ed6] hover:border-[#008ed6] transition-all duration-300 rounded-xs"
          >
            DOWNLOAD NOW
          </Link>
          <Link
            href="#features"
            className="px-6 py-2.5 text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider border border-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-xs"
          >
            VIEW FEATURES
          </Link>
        </div>
      </div>
    </section>
  );
}
