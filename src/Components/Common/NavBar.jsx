import React, { useState } from "react";
import Logo from "../../assets/png/Logoname.png";
import { CrossIcon, MenuIconBlack } from "./Icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="container">
        <div className="flex justify-between items-center py-[15px]">
          <Link to="/">
            <img className="cursor-pointer w-[122px]" src={Logo} alt="logo" />
          </Link>
          <div className=" hidden lg:block">
            <ul className="flex gap-7 lg:px-6">
              <li className="whitespace-nowrap cursor-pointer hover:text-primary text-black duration-300 ">
                <a href="#home">Home</a>
              </li>
              <li className="whitespace-nowrap cursor-pointer hover:text-primary text-black duration-300 ">
                <a href="#about"> About Us </a>
              </li>
              <li className="whitespace-nowrap cursor-pointer hover:text-primary text-black duration-300 ">
                <a href="#service"> Our Services </a>
              </li>
              <li className="whitespace-nowrap cursor-pointer hover:text-primary text-black duration-300 ">
                <a href="#testimonial"> Testimonials</a>
              </li>
              <li className="whitespace-nowrap cursor-pointer hover:text-primary text-black duration-300 ">
                <a href="#contact"> Contact Us </a>
              </li>
            </ul>
          </div>
          <div className="lg:flex hidden  ">
            <a href="#download" className="py-4 px-8 duration-300 bg-primary rounded-[60px] text-white  hover:bg-black   ">
              Download App
            </a>
          </div>
          <div className="w-full lg:hidden flex justify-end">
            <button
              onClick={() => {
                setToggle(true);
              }}
            >
              <MenuIconBlack />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={` transition-all ease-in-out duration-300 fixed  left-0 w-full z-50 h-screen bg-primary flex justify-center items-center flex-col lg:hidden ${
          toggle ? "top-0" : "top-[-1000%]"
        }`}
      >
        <div className="absolute top-0 end-0 p-6">
          <button
            onClick={() => {
              setToggle(false);
            }}
          >
            <CrossIcon />
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <ul className="text-lg">
            <li
              onClick={() => {
                setToggle(false);
              }}
              className=" cursor-pointer   mt-9 text-white text-center"
            >
              <a href="#home">Home</a>
            </li>
            <li
              onClick={() => {
                setToggle(false);
              }}
              className=" cursor-pointer   mt-9 text-white text-center"
            >
              <a href="#about"> About Us </a>
            </li>
            <li
              onClick={() => {
                setToggle(false);
              }}
              className=" cursor-pointer  mt-9 text-white text-center "
            >
              <a href="#service"> Our Services </a>
            </li>
            <li
              onClick={() => {
                setToggle(false);
              }}
              className=" cursor-pointer  mt-9 text-white text-center "
            >
              <a href="#testimonial"> Testimonials</a>
            </li>
            <li
              onClick={() => {
                setToggle(false);
              }}
              className=" cursor-pointer   mt-9 text-white text-center"
            >
              <a href="#contact"> Contact Us </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
