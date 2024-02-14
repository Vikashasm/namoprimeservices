import React from "react";
import hero_img from "../assets/png/hero_img.png";
import shadow from "../assets/png/shadow.png";
const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow flex items-center relative z-40 min-h-screen" id="home" >
        <div className="container">
          <div className="w-full md:flex items-center ">
            <div className="md:w-1/2 text-center md:text-start "data-aos="fade-right" data-aos-duration="5000">
              <h2 className="font-bold text-[30px] md:text-[38px] lg:text-[45px] xl:text-[59px] text-black mb-0 leading-[46px] lg:leading-[66px]">
                Your <span className="text-primary">One-Stop</span> Solution for
                Services
              </h2>
              <p className=" mt-2 xl:mt-4 mb-0 text-black">
              Introducing our one-stop solution for all your service needs, where convenience meets excellence. Our comprehensive platform is designed to streamline and simplify your experience, offering a wide array of services under one roof. Whether you're looking for home maintenance, professional consultations, or specialized assistance, our platform brings together a network of skilled professionals to cater to your diverse
              
              </p>
              <button className="py-4 px-8 bg-primary font-medium text-sm md:text-md rounded-[60px] text-white  hover:bg-black duration-300  mt-4 lg:mt-6 xl:mt-[42px] ">
                Find Out More
              </button>
            </div>
            <div className="md:w-1/2 " data-aos="fade-left" data-aos-duration="5000">
              <img
                className="md:ps-10 w-[60%] md:w-full lg:w-[480px] lg:h-[643px] mx-auto mt-9 md:mt-0"
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
