import React from "react";
import {
  CleaningIcon,
  ReparingIcon,
  PaintingIcon,
  ElectricianIcon,
  PlumbingIcon,
  MechanicIcon,
} from "./Common/Icons";

const Service = () => {
  return (
    <>
      <div className="bg-white py-10 md:py-20">
        <div className="container">
          <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black text-center">
            Our Range of <span className="text-primary">Services</span>
          </h2>
          <div className="w-full flex flex-wrap mt-8 md:mt-14  ">
            <div className="sm:w-full md:w-1/2 lg:w-1/3 text-center  p-3 ">
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] pt-6 px-6 pb-14 hover:shadow-lg duration-300 cursor-pointer ">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-3 lg:p-[27px] inline-block">
                  <CleaningIcon />
                </div>
                <p className="mt-4 mb-0 font-medium md:text-xl">Cleaning</p>
                <p className="mb-0 mt-3 text-grey lg:text-base text-sm">
                  Experience the joy of a spotless home with our professional
                  cleaning services. From regular maintenance to deep cleaning,
                  we've got you covered.
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 lg:w-1/3 text-center  p-3 ">
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] pt-6 px-6 pb-14 hover:shadow-lg duration-300 cursor-pointer ">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-3 lg:p-[27px] inline-block">
                  <ReparingIcon />
                </div>
                <p className="mt-4 mb-0 font-medium md:text-xl">Repairing</p>
                <p className="mb-0 mt-3 text-grey lg:text-base text-sm">
                  Quick and efficient solutions for all your household repairs.
                  Our skilled technicians ensure that your home stays in top
                  condition.
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 lg:w-1/3 text-center  p-3 ">
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] pt-6 px-6 pb-14 hover:shadow-lg duration-300 cursor-pointer ">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-3 lg:p-[27px] inline-block">
                  <PaintingIcon />
                </div>
                <p className="mt-4 mb-0 font-medium md:text-xl">Painting</p>
                <p className="mb-0 mt-3 text-grey lg:text-base text-sm">
                  Transform your living spaces with our expert painting
                  services. Choose from a variety of colors and finishes to suit
                  your style.
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 lg:w-1/3 text-center   p-3  ">
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] pt-6 px-6 pb-14 hover:shadow-lg duration-300 cursor-pointer ">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-3 lg:p-[27px] inline-block">
                  <ElectricianIcon />
                </div>
                <p className="mt-4 mb-0 font-medium md:text-xl">Electrician</p>
                <p className="mb-0 mt-3 text-grey lg:text-base text-sm">
                  From minor fixes to major installations, our electricians are
                  ready to handle all your electrical needs, ensuring safety and
                  compliance.
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 lg:w-1/3 text-center   p-3  ">
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] pt-6 px-6 pb-14 hover:shadow-lg duration-300 cursor-pointer ">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-3 lg:p-[27px] inline-block">
                  <PlumbingIcon />
                </div>
                <p className="mt-4 mb-0 font-medium md:text-xl">Plumbing</p>
                <p className="mb-0 mt-3 text-grey lg:text-base text-sm">
                  Say goodbye to leaks and plumbing issues. Our experienced
                  plumbers provide timely and effective solutions to keep your
                  water systems running smoothly.
                </p>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 lg:w-1/3 text-center  p-3 ">
              <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] pt-6 px-6 pb-14 hover:shadow-lg duration-300 cursor-pointer ">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-3 lg:p-[27px] inline-block">
                  <MechanicIcon />
                </div>
                <p className="mt-4 mb-0 font-medium md:text-xl">Mechanic</p>
                <p className="mb-0 mt-3 text-grey lg:text-base text-sm">
                  From routine maintenance to complex repairs, our skilled
                  mechanics have the expertise to handle a wide range of
                  automotive issues.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="py-4 px-8 bg-primary font-medium text-sm md:text-md rounded-[60px] text-white  hover:bg-black duration-300  mt-4 lg:mt-6 xl:mt-[42px] ">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
