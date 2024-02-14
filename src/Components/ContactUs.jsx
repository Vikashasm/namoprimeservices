import React from "react";
import earth from "../assets/png/earth.png";
const ContactUs = () => {
  return (
    <>
      <div className="bg-white py-4 lg:py-32" id="contact">
        <div className="container ">
          <div className="md:flex items-center w-full gap-6">
            <div className=" md:text-start text-center mt-7 md:mt-0 md:w-1/2"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black mb-0">
                Contact Us
              </h2>
              <form typeof="Submit" className="md:px-2">
                <div className="min-[500px]:flex w-full justify-start items-center gap-4 ">
                  <div className=" min-[500px]:w-1/2 mt-6  text-start">
                    <label className="text-black">First Name</label>
                    <br></br>
                    <input
                      className="rounded-lg p-3 outline-none mt-[6px] min-w-[500px]:max-w-[267px] w-full"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className=" min-[500px]:w-1/2 mt-6 text-start">
                    <label className="text-black">Last Name </label>
                    <br></br>
                    <input
                      className="rounded-lg p-3 outline-none mt-[6px] min-w-[500px]:max-w-[267px] w-full"
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="min-[500px]:flex w-full justify-start  items-center gap-4 ">
                  <div className="min-[500px]:w-1/2 mt-6 text-start">
                    <label className="text-black text-start">Email Address* </label>
                    <br></br>
                    <input
                      className="rounded-lg p-3 outline-none mt-[6px] min-w-[500px]:max-w-[267px] w-full"
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className=" min-[500px]:w-1/2 mt-6  text-start ">
                    <label className="text-black">Phone Number</label>
                    <br></br>
                    <input
                      className="rounded-lg p-3 outline-none mt-[6px] min-w-[500px]:max-w-[267px] w-full"
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="mt-4 text-start">
                  <label className="text-black ">Message</label>
                  <br></br>
                  <textarea className="w-full mt-1 p-3 outline-none rounded-lg bg-[#fff] h-[110px] border border-[#D6D6D6]"></textarea>
                </div>
                <button className="py-4 px-8 bg-primary font-medium text-sm md:text-md rounded-[60px] text-white  hover:bg-black duration-300  mt-4 lg:mt-6 xl:mt-[42px] ">
                  Submit
                </button>
              </form>
            </div>
            <div
              className="mt-8 sm:w-2/3 mx-auto md:mx-0  md:w-1/2 mb-5 md:mb-0 "
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <img className="min-[400px]:w-2/3 min-[600px]:w-full mx-auto" src={earth} alt="earth" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
