import React from "react";
import { ChooseData } from "./Common/Helper";

const ChooseNamo = () => {
  return (
    <>
      <div className=" py-10 lg:py-20"id="testimonial">
        <div className="container">
          <div className="flex w-full flex-wrap">
            <div className="sm:w-1/2 w-full">
              <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black text-center sm:text-start ">
                Why Choose
                <span className="text-primary"> Namo Prime services</span>
              </h2>
            </div>
            <div className="sm:w-1/2">
              <p className="mb-0 mt-3 text-black lg:text-base text-sm text-center sm:text-start">
                At Namo Prime, we pride ourselves on delivering unparalleled
                services that go beyond the ordinary. Choosing us means choosing
                excellence, reliability, and a commitment to your satisfaction
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap mt-12 ">
            {ChooseData.map((value, i) => {
              return (
                <>
                  <div className="sm:w-1/2 p-2" data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200">
                    <div className="rounded-xl h-full border border-gray-200 bg-[#fff] p-4 hover:shadow-lg duration-300 cursor-pointer flex items-start gap-5">
                      <div className=" rounded-[150px] bg-[#D9E9DB] p-2 lg:p-4 inline-block">
                       {value.icon}
                      </div>
                      <div>
                        <p className=" mb-0 font-medium md:text-xl">
                         {value.para}
                        </p>
                        <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                         {value.para2}
                        </p>
                      </div>
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

export default ChooseNamo;
