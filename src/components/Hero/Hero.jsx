import React from 'react';
import mountain from "../../assets/moon-surface-hd.png"

function Hero() {
  return (
    <div className="bg-black/20 h-full text-zinc-100 relative z-20 w-full sm:px-20 sm:py-20 px-6 py-30">
      <div className="h-full flex justify-center items-center">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left Column - Heading and Description */}
          <div className="text-center sm:text-left sm:space-y-6 space-y-4">
            <h1 data-aos='fade-up' className="text-4xl sm:text-6xl font-bold font-['swera_demo']">
              Orbit The Earth
            </h1>
            <p data-aos='fade-up' data-aos-delay='300' className="text-gray-300 text-sm sm:mt-6 mt-4 px-6 sm:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit
              dolorum labore minima saepe deserunt illo laudantium ex odio rerum
              beatae dolorem, maiores delectus fugit. Nemo a ipsam, impedit
              laudantium vero quas ut consectetur amet ullam mollitia incidunt
              nesciunt alias? Ipsam quos perferendis dolor, dolores asperiores
              aliquid necessitatibus alias? Dicta.
            </p>
            <button data-aos='fade-up' data-aos-delay='500' className='primary-button'>Learn More</button>
          </div>
        </div>
      </div>
      <img  src={mountain} alt="" 
      className='absolute right-0 bottom-0 w-full brightness-50 z-10'
      />
      <div className='absolute bottom-0 right-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'>  
      </div>
    </div>
  );
}

export default Hero;
