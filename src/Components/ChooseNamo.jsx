import React from "react";
import { ChooseIcon } from "./Common/Icons";

const ChooseNamo = () => {
  return (
    <>
      <div className="py-20">
        <div className="container">
          <div className="flex w-full flex-wrap">
            <div className="sm:w-1/2">
              <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black ">
                Why Choose
                <span className="text-primary">Namo Prime services</span>
              </h2>
            </div>
            <div className="sm:w-1/2">
              <p className="mb-0 mt-3 text-black lg:text-base text-sm">
                At Namo Prime, we pride ourselves on delivering unparalleled
                services that go beyond the ordinary. Choosing us means choosing
                excellence, reliability, and a commitment to your satisfaction
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap mt-12 ">
            <div className="sm:w-1/2 p-2">
              <div className="rounded-xl h-full border border-gray-200 bg-[#fff] p-4 hover:shadow-lg duration-300 cursor-pointer flex items-start gap-5">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-2 lg:p-4 inline-block">
                  <ChooseIcon />
                </div>
                <div>
                  <p className=" mb-0 font-medium md:text-xl">Convenience</p>
                  <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                    Book services at your fingertips through our user-friendly
                    app. We bring the experts to you, saving you time and
                    effort.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 p-2">
              <div className="rounded-xl h-full border border-gray-200 bg-[#fff] p-4 hover:shadow-lg duration-300 cursor-pointer flex items-start gap-5">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-2 lg:p-4 inline-block">
                  <ChooseIcon />
                </div>
                <div>
                  <p className=" mb-0 font-medium md:text-xl">Quality Assurance</p>
                  <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                  Our team of skilled professionals is committed to delivering top-notch services with a focus on quality and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 p-2">
              <div className="rounded-xl h-full border border-gray-200 bg-[#fff] p-4 hover:shadow-lg duration-300 cursor-pointer flex items-start gap-5">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-2 lg:p-4 inline-block">
                  <ChooseIcon />
                </div>
                <div>
                  <p className=" mb-0 font-medium md:text-xl">Transparent Pricing</p>
                  <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                  No hidden costs. Our transparent pricing ensures that you know exactly what to expect, making budgeting simple and stress-free.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 p-2">
              <div className="rounded-xl h-full border border-gray-200 bg-[#fff] p-4 hover:shadow-lg duration-300 cursor-pointer flex items-start gap-5">
                <div className=" rounded-[150px] bg-[#D9E9DB] p-2 lg:p-4 inline-block">
                  <ChooseIcon />
                </div>
                <div>
                  <p className=" mb-0 font-medium md:text-xl">24/7 Support</p>
                  <p className="mb-0 mt-2 text-grey lg:text-base text-sm">
                  Need assistance or have a question? Our dedicated customer support team is available around the clock to address your concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseNamo;
