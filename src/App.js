import "./App.css";
import MainPage from "./View/MainPage";
import logoimg from "../src/assets/png/Logoname.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
function App() {
  const [preloaderActive, setpreloaderActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setpreloaderActive(true);
    }, 2000);
    if (preloaderActive) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  });
  Aos.init({
    once: true, // whether animation should happen only once - while scrolling down
    duration: 800,
  });
  return (
    <>
      <div className="relative z-50">
        <div
          className={`${
            preloaderActive ? "left-[-50%]" : ""
          } bg-[#D9E9DB] fixed h-screen left-0 top-0 w-[50%] z-50 transition-all duration-[0.8s] ease-in-out `}
        ></div>
        <div
          className={`${
            preloaderActive ? "right-[-50%]" : ""
          } bg-[#D9E9DB] fixed h-screen right-0 top-0 w-[50%] z-50 transition-all duration-[0.8s] ease-in-out `}
        ></div>
        {preloaderActive ? (
          ""
        ) : (
          <div
            className={`
          } bg-[#D9E9DB] fixed h-screen -mt-10 sm:mt-0 right-0 top-0 w-full z-50 flex justify-center items-center `}
          >
            <img
              className="w-[160px] md:w-[300px]"
              src={logoimg}
              alt="logoImg"
            />
          </div>
        )}
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
