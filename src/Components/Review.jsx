import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
const Review = () => {
  const [viewCount, setViewCount] = useState(false);
  function onVisibilityChange(visible) {
    if (visible) {
      setViewCount(true);
    }
  }
  return (
    <>
      <div className="w-full mx-auto z-40 md:relative md:-top-12  min-[1100px]:-top-32 min-[1500px]:-top-12  mt-10 md:mt-0">
        <div className="container ">
          <div class="rounded-[24px] bg-[#fff] shadow-lg p-4 md:py-6 md:px-20 flex justify-between items-center ">
            <div className="w-full flex justify-between">
              <div className="counter-box d-flex flex-column align-items-center justify-content-center colored">
                <i className="fa fa-thumbs-o-up"></i>
                <div className="d-flex justify-content-center align-items-center">
                  <h2
                    className="text-lg  md:text-xl lg:text-2xl font-medium text-primary text-center"
                    data-count="1"
                  >
                    <ReactVisibilitySensor
                      onChange={onVisibilityChange}
                      offset={{
                        top: 8,
                      }}
                      delayedCallon
                    >
                      <CountUp
                        start={320}
                        end={viewCount ? 400 : 400}
                        duration={4}
                        delay={3.4}
                      />
                    </ReactVisibilitySensor>
                    +
                  </h2>
                </div>
                <p className=" text-black text-xs sm:text-base text-center">
                  Service Completed
                </p>
              </div>
              <div className="counter-box d-flex flex-column align-items-center justify-content-center">
                <i className="fa fa-group"></i>
                <div className="d-flex justify-content-center align-items-center ">
                  <h2 className="text-lg  md:text-xl lg:text-2xl font-medium text-primary">
                    <ReactVisibilitySensor
                      onChange={onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCallon
                    >
                      <CountUp
                        start={0}
                        end={viewCount ? 2.5 : 0}
                        duration={4}
                        delay={2.8}
                      />
                    </ReactVisibilitySensor>
                    +
                  </h2>
                </div>
                <p className="text-black text-xs sm:text-base text-center">
                  Reviews
                </p>
              </div>
              <div className="counter-box d-flex flex-column align-items-center justify-content-center">
                <i className="fa fa-group"></i>
                <div className="d-flex justify-content-center align-items-center ">
                  <h2 className="text-lg  md:text-xl lg:text-2xl font-medium text-primary">
                    <ReactVisibilitySensor
                      onChange={onVisibilityChange}
                      offset={{
                        top: 8,
                      }}
                      delayedCallon
                    >
                      <CountUp
                        start={0}
                        end={viewCount ? 12 : 0}
                        duration={4}
                        delay={2.8}
                      />
                    </ReactVisibilitySensor>
                    +
                  </h2>
                </div>
                <p className="text-black text-xs sm:text-base text-center">
                  Downloads
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
