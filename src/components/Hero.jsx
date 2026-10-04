import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat pt-28 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(21, 23, 30, 0.85), rgba(21, 23, 30, 0.85)), url('/assets/lucid-banner-background.png')`,
      }}
    >
      <div className="w-full max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Heading, Subtitle & Action Buttons */}
        <div className="z-10 text-center lg:text-left">
          <span className="text-[#008ed6] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
            Introducing Lucid
          </span>

          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight">
            Carefully crafted and <br className="hidden sm:inline" />
            beautiful landing page.
          </h1>

          <p className="mt-5 text-[#999999] text-[15px] sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            Etiam ullamcorper et turpis eget hendrerit. Vivamus at lacus sed
            ante auctor lobortis. Phasellus sed iaculis velit. Pellentesque
            vulputate, libero sed facilisis pulvinar.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-[#008ed6] hover:bg-[#0077b5] text-white text-xs font-semibold px-8 py-3.5 rounded-full uppercase tracking-wider transition shadow-lg shadow-[#008ed6]/20">
              Download Now
            </button>
            <button className="border border-gray-500 hover:border-[#008ed6] hover:text-[#008ed6] text-white text-xs font-semibold px-8 py-3.5 rounded-full uppercase tracking-wider transition">
              View Features
            </button>
          </div>
        </div>

        {/* Right Column: Phone Mockup Frame */}
        <div className="relative flex justify-center items-center">
          <div className="w-65 sm:w-72 h-120 sm:h-130 bg-[#1d2028]/90 border-4 border-gray-700/60 rounded-[38px] shadow-2xl p-4 flex flex-col items-center justify-between text-center relative backdrop-blur-sm">
            <div className="w-14 h-1.5 bg-gray-600 rounded-full mt-2"></div>
            <div className="text-xs text-[#999999] tracking-wider uppercase">
              [ App Mockup Screen ]
            </div>
            <div className="w-10 h-10 border border-gray-600 rounded-full mb-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
