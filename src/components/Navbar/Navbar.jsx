import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div data-aos="fade-down" className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm py-2 px-4 sm:px-10 font-['Swera_demo'] text-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex">
            <h3 className="text-zinc-50 text-xl md:text-2xl">SpaceX</h3>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex links gap-8 text-zinc-50 font-['Speedy']">
            {["About", "Technology", "Galaxy", "Satellite"].map((item, index) => (
              <a key={index} className="capitalize hover:text-sky-500 transition">
                {item}
              </a>
            ))}
          </div>

          {/* Login Button for Desktop */}
          <div className="hidden md:block">
            <button className="text-zinc-100 px-6 py-2 border-[1px] rounded-xl hover:bg-zinc-100 hover:text-black transition">
              Login
            </button>
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-zinc-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Smooth Transition */}
        <div
          className={`md:hidden mt-6 transform transition-all duration-1000 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 text-zinc-100 font-['Swera_demo'] items-center justify-center">
            {["About", "Technology", "Galaxy", "Satellite"].map((item, index) => (
              <a
                key={index}
                className="capitalize hover:text-zinc-300 transition"
              >
                {item}
              </a>
            ))}
            <button className="text-zinc-100 px-6 py-2 border-[1px] rounded-xl hover:bg-zinc-100 hover:text-black transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
