import React from "react";
import unique from "../assets/png/unique.png";
const UniqueSelling = () => {
  return (
    <>
      <div className="container mt-20 md:mb-40 mb-10" id="about">
        <div className="md:flex items-center w-full ">
          <div className="w-2/3 mx-auto md:w-1/2"data-aos="fade-right" data-aos-duration="600">
            <img className="sm:pr-10" src={unique} alt="unique" />
          </div>
          <div className="md:w-1/2 md:text-start text-center mt-7 md:mt-0"data-aos="fade-left" data-aos-duration="600">
            <h2 className="text-xl sm:text-[30px] xl:text-2xl font-medium text-black mb-0">
              Unique Selling <span className="text-primary">Proposition</span>
            </h2>
            <p className="text-grey text-sm lg:text-base mb-0 mt-2 lg:mt-5">
            A Unique Selling Proposition (USP) is a distinctive feature or characteristic that sets a product, service, or brand apart from its competitors. It is a clear and compelling statement that communicates the unique benefits and value that a business offers to its customers. The primary purpose of a USP is to differentiate a product or service in a crowded market and to create a memorable and compelling reason for customers to choose one brand over another. A successful USP addresses the specific needs and desires of the target audience, emphasizing what makes the product or service stand out and why it is the best choice. Crafting a strong USP requires a deep understanding of the target market, competition analysis, and a focus on delivering something that genuinely resonates with customers. Ultimately, a well-defined Unique Selling Proposition can be a powerful tool in building brand identity and driving customer loyalty.
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
