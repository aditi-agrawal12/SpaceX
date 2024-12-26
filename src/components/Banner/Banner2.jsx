import React from 'react';
import earth from '../../assets/earth.gif';

function Banner() {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
      {/* Center the content */}
      <div className="container mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Right Column - Text (First on large screens, second on small screens) */}
          <div className="space-y-4 xl:pr-16 p-6 border-l-2 border-b-2 border-l-sky-700 border-b-sky-700 sm:order-1 order-2">
            <p data-aos='fade-up' className="text-sky-700 uppercase tracking-wide text-sm">
              Our Mission
            </p>
            <h1 data-aos='fade-up'data-aos-delay="300" className="text-4xl font-bold uppercase">
              RapidCast
            </h1>
            <p data-aos='fade-up'data-aos-delay="500" className="text-gray-300 leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut voluptas nisi
              itaque enim veniam libero alias eaque reiciendis officia, molestias earum placeat
              perspiciatis, voluptates odit vero dignissimos ab? Porro!
            </p>
            <button data-aos='fade-up'data-aos-delay="500" className="primary-button">
              Learn More
            </button>
          </div>

          {/* Left Column - Image (First on small screens, second on large screens) */}
          <div data-aos='zoom-in'className="flex justify-center sm:order-2 order-1">
            <img
              src={earth}
              alt="Satellite"
              className="w-full max-w-md sm:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
