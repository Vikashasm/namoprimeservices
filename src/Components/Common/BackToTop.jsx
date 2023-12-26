import React, { useEffect, useState } from "react";
import { BackToTopArrow } from "./Icons";

const Backtotop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {scrollPosition > 200 ? (
        <div
          className="fixed  bottom-10 right-2 cursor-pointer z-40 pe-3"
          onClick={() => scrollToTop()}>
       <BackToTopArrow />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Backtotop;
