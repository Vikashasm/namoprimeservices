import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CLientSlides, CeoSlides } from "./Common/Helper";
const Clients = () => {
  const slider = useRef(null);
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          autoplay:true,
          autoplaySpeed:2000,
        },
      },
    ],
  };
  return (
    <>
      <section className=" pt-xl-5 mt-xl-5">
        <div className="container  pt-sm-5 pb-sm-3">
          <div className="relative ">
            <div className="  px-sm-3">
              <Slider ref={slider} {...settings}>
                {CLientSlides.map((value, index) => {
                  return (
                    <>
                      <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] p-6 hover:shadow-lg duration-300 cursor-pointer">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-3">
                            <img src={value.img} alt="leslie" />
                            <p className="font-medium text-xl text-black">
                              {value.para}
                            </p>
                          </div>
                          {value.icon}
                        </div>
                        <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                          {value.para2}
                        </p>
                        <div className="flex items-center gap-1 mt-3">
                          {value.icon2}
                          {value.icon2} 
                          {value.icon2} 
                          {value.icon2}
                          {value.icon2}
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
