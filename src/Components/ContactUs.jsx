import React from "react";
import earth from "../assets/png/earth.png";
const ContactUs = () => {
  return (
    <>
      <div className="bg-white py-32" id="contact">
        <div className="container mx-auto max-w-7xl">
          <div className="md:flex items-center w-full ">
            <div className="md:w-1/2 md:text-start text-center mt-7 md:mt-0">
              <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black mb-0">
                Contact Us
              </h2>
              <form typeof="Submit">
              <div className="flex  items-center gap-4 ">
                <div className="mt-6 ">
                  <label className="text-black">First Name</label>
                  <input
                    className="rounded-lg p-3 outline-none mt-[6px]"
                    type="text"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="mt-6 ">
                  <label className="text-black">Last Name </label>
                  <input
                    className="rounded-lg p-3 outline-none mt-[6px]"
                    type="text"
                    placeholder="Enter your last name"
                  />
                </div>
                </div>
                <div className="flex w-full items-center gap-4 ">
                <div className="mt-6 ">
                  <label className="text-black">Email Address* </label>
                  <input
                    className="rounded-lg p-3 outline-none mt-[6px]"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-6 ">
                  <label className="text-black">Phone Number</label>
                  <input
                    className="rounded-lg p-3 outline-none mt-[6px]"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
                </div>
                {/* <div className="w-full mt-4 me-16">
                  <label className="text-black">Message</label>
                  <br></br>
                  <textarea className="rounded-lg outline-none p-2 bg-[#fff] border border-grey mt-[6px] w-full h-[100px]"></textarea>
                </div> */}
          
              <button className="py-4 px-8 bg-primary font-medium text-sm md:text-md rounded-[60px] text-white  hover:bg-black duration-300  mt-4 lg:mt-6 xl:mt-[42px] ">
                Submit
              </button>
              </form>
            </div>
            <div className="w-2/3  md:w-1/2">
              <img src={earth} alt="earth" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
