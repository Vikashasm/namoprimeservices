import React from "react";
import GooglePlay from "../assets/png/google.png";
import AppleStore from "../assets/png/app.png";
const Experience = () => {
  return (
    <>
      <section className="translate-y-14 lg:translate-y-28" id="download">
        <div className="container">
          <div className="bg_contact rounded-[16px] bg-[#00A015]">
            <div className="max-w-[576px] mx-auto text-center py-10 px-3 sm:py-16  md:py-20 overflow-hidden">
              <h2 className="text-lg md:text-[32px] lg:text-2xl font-medium text-[#fff] md:leading-[52px] ">
                Enhance Your Experience with Our Mobile App
              </h2>
              <div className="flex items-center mt-2 md:mt-11 justify-center gap-5">
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="playstore"
                >
                  <img className="w-full" src={GooglePlay} alt="googleplay" />
                </a>
                <a
                  href="https://www.apple.com/in/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="applestore"
                >
                  <img className="w-full" src={AppleStore} alt="applestore" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
