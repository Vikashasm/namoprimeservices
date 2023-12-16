import React from "react";
import unique from "../assets/png/unique.png";
const UniqueSelling = () => {
  return (
    <>
      <div className="container mt-20 md:mb-40 mb-10">
        <div className="md:flex items-center w-full ">
          <div className="w-2/3 mx-auto md:w-1/2">
            <img className="sm:pr-10" src={unique} alt="unique" />
          </div>
          <div className="md:w-1/2 md:text-start text-center mt-7 md:mt-0">
            <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black mb-0">
              Unique Selling <span className="text-primary">Proposition</span>
            </h2>
            <p className="text-grey text-sm lg:text-base mb-0 mt-2 lg:mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              purus eleifend, sollicitudin tortor id, eleifend ante. Nam
              tincidunt ipsum pellentesque viverra facilisis. Suspendisse id
              lacus et mauris luctus lobortis. Curabitur libero nibh, dictum eu
              neque et, pharetra placerat diam. Ut vulputate magna et felis
              sodales facilisis. Praesent est arcu, egestas blandit tincidunt
              ac, gravida et quam.
            </p>
            <button className="py-4 px-8 border border-primary font-medium text-sm md:text-md rounded-[60px] text-primary  hover:bg-primary hover:text-white duration-300  mt-4 lg:mt-6 xl:mt-[42px] ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueSelling;
