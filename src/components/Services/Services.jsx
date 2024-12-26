import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace } from "react-icons/fa6";
import { FaSpaceAwesome } from "react-icons/fa6";
import wave from "../../assets/wave Gif.gif";

const ServicesData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations capturing stunning images of the universe",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
];

function Services() {
  return (
    <div className='bg-black bg-cover px-10 relative z-50'>
      <div className="container">
        <div className="min-h-[400px] bg-black">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-">
            {ServicesData.map((data, index) => (
              <div data-aos = "fade-up" data-aos-delay={data.aosDelay}
                key={index}
                className="min-h-[180px] flex flex-col gap-2 justify-center items-center rounded-xl  border-[1px] border-t-sky-700  border-r-sky-700 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto "
              >
                <div className="flex justify-center items-center mb-4 text-white">
                  {data.icon}
                </div>
                <h2 className="text-2xl font-bold text-center text-orange-500">{data.title}</h2>
                <p className="text-center text-sm mt-2 ">{data.content}</p>
                <p className="text-centermt-4 text-sm text-gray-300">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
          <div>
              <img src= {wave} alt="" 
              className='h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
