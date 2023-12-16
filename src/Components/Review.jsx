import React from "react";
const Review = () => {
  return (
    <>
      <div className="w-full mx-auto z-40 md:relative md:-top-12  xl:-top-20 min-[1024px]:-top-20 mt-10 md:mt-0">
        <div className="container ">
          <div class="rounded-[24px] bg-[#fff] shadow-lg p-4 md:py-6 md:px-20 flex justify-between items-center ">
            <div className="w-full flex justify-between">
              <div className="w-1/3 text-center min-[400px]:border-r-2 min-[400px]:border-r-[#1EAB30]   pb-4 min-[400px]:pb-0">
                <h2 className=" text-lg  md:text-xl lg:text-2xl font-medium text-primary">
                  8.9%
                </h2>
                <p className="text-black text-xs sm:text-base">
                  Active Clints
                </p>
              </div>
              <div className="w-1/3 text-center min-[400px]:border-r-2 min-[400px]:border-r-[#1EAB30] pb-4 min-[400px]:pb-0">
                <h2 className=" text-lg  md:text-xl lg:text-2xl font-medium text-primary">
                  150K+
                </h2>
                <p className="text-black text-xs sm:text-base">Reviews</p>
              </div>
              <div className="w-1/3 text-center">
                <h2 className=" text-lg md:text-xl lg:text-2xl font-medium text-primary">
                  10M+
                </h2>
                <p className="text-black text-xs sm:text-base">Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
