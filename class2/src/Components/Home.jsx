function Home() {
  return (
    <div className="px-4 sm:px-5 md:px-7 py-5">
      {/* navbar */}
      <div className="bg-gray-300 flex items-center justify-between gap-2 p-3 rounded-2xl mb-3">
        <h1 className="text-xl font-semibold">BloomFi</h1>

        <div className="flex gap-2 sm:gap-4 md:gap-6 text-gray-600 text-sm sm:text-base">
          <span className="hidden sm:inline">USDBloom</span>
          <span className="hidden sm:inline">Business</span>
          <span className="hidden sm:inline">Treasury</span>
          <span className="hidden sm:inline">Developers</span>
          <span className="hidden sm:inline">Join us</span>

          {/* Mobile menu icon */}
          <svg
            className="sm:hidden w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <button className="bg-[#2d2748] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap">
          Launch BETA
        </button>
      </div>

      {/* hero */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-15 md:mb-20">
        <img
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200"
          alt="Hero background"
          className="w-full h-70 sm:h-60 md:h-200 lg:h-135 object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Where Money Grows
          </h1>

          <p className="text-gray-300 mt-3 sm:mt-4 max-w-70 sm:max-w-sm text-sm sm:text-base">
            A programmable, utility-driven stable token designed for native
            value accrual and seamless integration into DeFi.
          </p>

          <button className="mt-4 sm:mt-6 bg-yellow-700 text-white px-6 py-2 rounded-full hover:bg-yellow-800 transition text-sm sm:text-base">
            Try it now
          </button>
        </div>
      </div>

      <div className="mb-15 sm:mb-20 md:mb-25 mt-10 sm:mt-15 md:mt-25">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0 mb-10 sm:mb-12 lg:mb-17">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-5 md:mb-7">
              What is USD Bloom?
            </h2>

            <button className="bg-[#2d2748] text-white text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-[#3d3559] transition">
              Explore now
            </button>
          </div>

          <p className="max-w-sm text-gray-600 text-lg sm:text-xl md:text-2xl">
            USD Bloom is a yield-bearing stablecoin that helps your capital grow
            while staying pegged to the U.S. dollar.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 sm:gap-5 md:gap-6 min-h-50 sm:min-h-50 md:h-70">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group">
            <img
              src="https://i.pinimg.com/1200x/38/f0/b7/38f0b789a415bd1d1ad0263fdce02fca.jpg"
              alt="Capital growth"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 bg-linear-to-t from-black/50 to-transparent">
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 text-white">
                Capital that grows
              </h3>

              <p className="text-white/90 text-xs sm:text-sm md:text-base w-full sm:w-76">
                Earn passive income as your stablecoins are deployed into
                high-performing DeFi protocols.
              </p>
            </div>
          </div>

          <div className="bg-[#2d2748] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-10 sm:mb-16 md:mb-28">
              Always liquid, <br /> always stable
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 mt-auto">
              Stay fully dollar-pegged with instant access to your funds — no
              lockups or delays.
            </p>
          </div>

          <div className="bg-[#2d2748] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col">
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-10 sm:mb-16 md:mb-28">
              100% <br /> hands-free
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 mt-auto">
              No need to manage strategies manually. USD Bloom works in the
              background.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-start mb-5 sm:mb-5">
        {/* left */}
        <div>
          <p className="text-gray-500 text-xs sm:text-sm mb-2">
            USD bloom in Action
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">
            Use cases
          </h2>

          <p className="text-gray-800 text-sm sm:text-base max-w-sm">
            USD bloom offers a variety of use cases for developers, businesses
            and treasuries seeking secure and profitable stablecoin
            integrations.
          </p>
        </div>

        {/* right card */}
        <div className="bg-gray-200 p-8 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 md:mb-6">
            Business
          </h3>

          <p className="text-gray-600 mb-3 text-sm sm:text-base max-w-full md:max-w-100 lg:w-120">
            Boost user engagement by offering USD Bloom, a secure fiat-backed
            stablecoin with high yields.
          </p>

          <p className="text-xs sm:text-sm font-medium cursor-pointer hover:underline">
            → Learn more
          </p>

          <img
            src="https://i.pinimg.com/1200x/dc/3e/df/dc3edfee9a39839bdc1917b155986697.jpg"
            alt="Business use case"
            className="rounded-xl sm:rounded-2xl mt-4 sm:mt-5 md:mt-6 h-40 sm:h-50 md:h-60 lg:h-70 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
