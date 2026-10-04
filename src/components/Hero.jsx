import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat pt-32 pb-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(21, 23, 30, 0.85), rgba(21, 23, 30, 0.85)), url('/assets/lucid-banner-background.png')`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column Content */}
        <div className="z-10 text-center lg:text-left">
          <span className="text-[#008ed6] text-[13px] font-bold uppercase tracking-wider block mb-4">
            INTRODUCING LUCID THEME
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.18]">
            Carefully crafted and <br className="hidden sm:inline" />
            beautiful landing page.
          </h1>

          <p className="mt-5 text-[#999999] text-[15px] leading-relaxed max-w-lg mx-auto lg:mx-0">
            Etiam ullamcorper et turpis eget hendrerit. Praesent varius leo{" "}
            <br className="hidden md:inline" />
            velit, ut eleifend leo molestie a. Curabitur vel venenatis{" "}
            <br className="hidden md:inline" />
            lacus sed dolor placerat tempus. Morbi sed hendrerit arcu.
          </p>

          {/* Action Buttons: mt-10 sm:mt-12 diye ektu niche namano holo */}
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
            {/* DOWNLOAD NOW */}
            <button className="relative group overflow-hidden bg-transparent border border-white text-white text-[13px] font-bold px-7 py-3 rounded-[3px] uppercase tracking-wider hover:border-[#008ed6] active:border-[#008ed6] focus:border-[#008ed6] transition-colors duration-600 ease-in-out focus:outline-none select-none">
              <span className="absolute inset-0 bg-[#008ed6] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 group-focus:scale-x-100 transition-transform duration-600 ease-in-out origin-center pointer-events-none"></span>
              <span className="relative z-10">DOWNLOAD NOW</span>
            </button>

            {/* VIEW FEATURES */}
            <button className="relative group overflow-hidden bg-transparent border border-white text-white text-[13px] font-bold px-7 py-3 rounded-[3px] uppercase tracking-wider hover:border-[#008ed6] active:border-[#008ed6] focus:border-[#008ed6] transition-colors duration-600 ease-in-out focus:outline-none select-none">
              <span className="absolute inset-0 bg-[#008ed6] scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 group-focus:scale-x-100 transition-transform duration-600 ease-in-out origin-center pointer-events-none"></span>
              <span className="relative z-10">VIEW FEATURES</span>
            </button>
          </div>
        </div>

        {/* Right Column Showcase */}
        <div className="relative flex justify-center items-center lg:justify-end mt-12 sm:mt-16 lg:mt-0">
          <Image
            src="/assets/lucid.png"
            alt="Lucid Devices Mockup"
            width={580}
            height={600}
            priority
            className="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
