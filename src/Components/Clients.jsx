import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CLientSlides } from "./Common/Helper";
const Clients = () => {
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
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <>
      <section className=" pt-xl-5 mt-xl-5 bg-[#F1F1F1]">
        <div className="container  pt-sm-5 pb-sm-3 py-10 lg:py-20 ">
          <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black text-center ">
            Our
            <span className="text-primary">Clients</span> Say
          </h2>
          <div className="relative mt-12">
            <div className="  px-sm-3">
              <Slider {...settings}>
                {CLientSlides.map((item, index) => {
                  return (
                    <>
                      <div key={index} className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] p-6 hover:shadow-lg duration-300 cursor-pointer ">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-3">
                            <img src={item.img} alt="leslie" />
                            <p className="font-medium text-xl text-black">
                              {item.para}
                            </p>
                          </div>
                          {item.icon}
                        </div>
                        <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                          {item.para2}
                        </p>
                        <div className="flex items-center gap-1 mt-3">
                          {item.icon2}
                          {item.icon2}
                          {item.icon2}
                          {item.icon2}
                          {item.icon2}
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
