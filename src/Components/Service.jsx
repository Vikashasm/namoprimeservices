import React from "react";
import { ServiceData } from "./Common/Helper";
const Service = () => {
  return (
    <>
      <div className="bg-white py-10 md:py-20" id="service">
        <div className="container">
          <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black text-center">
            Our Range of <span className="text-primary">Services</span>
          </h2>
          <div className="w-full flex flex-wrap mt-8 md:mt-14  ">
            {ServiceData.map((value, i) => {
              return (
                <>
                  <div className="sm:w-full md:w-1/2 lg:w-1/3 text-center  p-3 " data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200">
                    <div className="rounded-xl h-full border border-gray-200 bg-[#F1F1F1] pt-6 px-6 pb-6 lg:pb-14 hover:shadow-lg duration-300 cursor-pointer ">
                      <div className=" rounded-[150px] bg-[#D9E9DB] p-3 lg:p-[27px] inline-block">
                        {value.icon}
                      </div>
                      <p className="mt-4 mb-0 font-medium md:text-xl">
                        {value.para}
                      </p>
                      <p className="mb-0 mt-3 text-grey lg:text-base text-sm">
                        {value.para2}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Service;
