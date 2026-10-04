import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-black py-10 sm:py-12 border-t border-white/10 w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Heading */}
          <h3 className="text-white text-xl sm:text-2xl lg:text-[28px] font-light tracking-tight leading-snug text-center md:text-left">
            <span className="font-bold">Like what you see?</span> Get this great
            theme now!
          </h3>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="#download"
              className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider border border-white/40 hover:bg-[#008ed6] hover:border-[#008ed6] transition-all duration-300 rounded-sm inline-block text-center"
            >
              DOWNLOAD NOW
            </Link>
            <Link
              href="#features"
              className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider border border-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-sm inline-block text-center"
            >
              VIEW FEATURES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
