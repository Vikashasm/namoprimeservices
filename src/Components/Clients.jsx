import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leslie from "../assets/png/leslie.png";
import jenny from "../assets/png/jenny.png";
import jacob from "../assets/png/jacob.png";
import { DoubleIcon, PaintingIcon, StarIcon } from "./Common/Icons";
const Clients = () => {
  const slider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2, // Adjust the number of slides for this breakpoint
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Adjust the number of slides for this breakpoint
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-white pt-24">
        <div className="container">
          <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black text-center">
            Our <span className="text-primary">Clients</span> Say
          </h2>
          <div className="mt-8">
            <Slider ref={slider} {...settings}>
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] p-6 hover:shadow-lg duration-300 cursor-pointer  ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <img src={leslie} alt="leslie" />
                    <p className="font-medium text-xl text-black">
                      Leslie <br></br>Alexander
                    </p>
                  </div>
                  <DoubleIcon />
                </div>
                <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean molestie cursus sem non eleifend. Praesent vitae
                  commodo nunc, at suscipit nibh. Aliquam ut lorem quis lectus
                  varius placerat eu non felis.
                </p>
                <div className="flex items-center gap-1 mt-3">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] p-6 hover:shadow-lg duration-300 cursor-pointer  ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <img src={jenny} alt="leslie" />
                    <p className="font-medium text-xl text-black">
                      Jenny Wlson
                    </p>
                  </div>
                  <DoubleIcon />
                </div>
                <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean molestie cursus sem non eleifend. Praesent vitae
                  commodo nunc, at suscipit nibh. Aliquam ut lorem quis lectus
                  varius placerat eu non felis.
                </p>
                <div className="flex items-center gap-1 mt-3">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] p-6 hover:shadow-lg duration-300 cursor-pointer  ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <img src={jacob} alt="leslie" />
                    <p className="font-medium text-xl text-black">
                      Jacob Jones
                    </p>
                  </div>
                  <DoubleIcon />
                </div>
                <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean molestie cursus sem non eleifend. Praesent vitae
                  commodo nunc, at suscipit nibh. Aliquam ut lorem quis lectus
                  varius placerat eu non felis.
                </p>
                <div className="flex items-center gap-1 mt-3">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] p-6 hover:shadow-lg duration-300 cursor-pointer  ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <img src={jenny} alt="leslie" />
                    <p className="font-medium text-xl text-black">
                      Jenny Wlson
                    </p>
                  </div>
                  <DoubleIcon />
                </div>
                <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean molestie cursus sem non eleifend. Praesent vitae
                  commodo nunc, at suscipit nibh. Aliquam ut lorem quis lectus
                  varius placerat eu non felis.
                </p>
                <div className="flex items-center gap-1 mt-3">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
