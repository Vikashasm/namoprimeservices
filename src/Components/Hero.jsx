import React from "react";
import hero_img from "../assets/png/hero_img.png";
import shadow from "../assets/png/shadow.png";
const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow flex items-center mt-14 lg:mt-0 relative z-40" id="home">
        <div className="container">
          <div className="w-full md:flex  ">
            <div className="md:w-1/2 text-center md:text-start sm:mt-20 lg:mt-28"data-aos="fade-right" data-aos-duration="5000">
              <h2 className="font-bold text-[30px] md:text-[38px] lg:text-[45px] xl:text-[59px] text-black mb-0 leading-[46px] lg:leading-[66px]">
                Your <span className="text-primary">One-Stop</span> Solution for
                Services
              </h2>
              <p className=" mt-2 xl:mt-4 mb-0 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                efficitur feugiat ultrices. Vivamus aliquet consequat tortor
                quis posuere. Nullam molestie vulputate dolor vel ultrices.
                Etiam ac justo arcu.
              </p>
              <button className="py-4 px-8 bg-primary font-medium text-sm md:text-md rounded-[60px] text-white  hover:bg-black duration-300  mt-4 lg:mt-6 xl:mt-[42px] ">
                Find Out More
              </button>
            </div>
            <div className="md:w-1/2 " data-aos="fade-left" data-aos-duration="5000">
              <img
                className="md:ps-10 w-[60%] md:w-full lg:w-[480px] lg:h-[643px] mx-auto md:mx-0 mt-9"
                src={hero_img}
                alt="hero_img"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute -z-20 bottom-3 -left-20">
          <img className="w-full" src={shadow} alt="shadow" />
        </div>
      </div>
    </>
  );
};

export default Hero;
