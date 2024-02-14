import React from "react";
import footerlogo from "../../assets/png/footerlogo.png";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./Icons";
import Experience from "../Experience";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
     <Experience />
      <footer className="bg-black font-Poppins pt-[140px] md:pt-[200px] lg:pt-[270px] -mt-8 md:-mt-24">
        <div className="container">
          <div className="flex flex-col justify-center items-center lg:max-w-[526px] mx-auto text-center">
            <img className="w-[122px] md:w-[210px] cursor-pointer" src={footerlogo} alt="FooterLogo" />
            <p className="text-grey  mt-4">
            Thank you for visiting our website! Explore our content and discover [mention key themes or topics]. For inquiries, collaborations, or feedback, feel free to contact us [insert contact information]. Connect with us on [social media platforms] for the latest updates and exclusive content. Your support means the world to us. © [Year] [Your Company or Website Name]."
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-4 justify-center">
              <a href="#home" className="text-white hover:text-primary duration-300" >
                Home
              </a>
              <a href="#about" className="text-white hover:text-primary duration-300" >
              About Us
              </a>
              <a href="service" className="text-white hover:text-primary duration-300" >
              Our Services
              </a>
              <a href="#testimonals" className="text-white hover:text-primary duration-300" >
              Testimonials 
              </a>
              <a href="#contact" className="text-white hover:text-primary duration-300" >
              Contact Us
              </a>
            </div>
            <div className="flex gap-4 xs:justify-center md:justify-start mt-6">
              <a
                className="hover:-translate-y-1 duration-300 ease-in-out"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                className="hover:-translate-y-1 duration-300 ease-in-out"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>

              <a
                className="hover:-translate-y-1 duration-300 ease-in-out"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <hr className="md:mt-20 mt-8 h-[2px] bg-primary" />
          <p className="text-xs  text-grey text-center py-6">
            ©{currentYear} Namo Prime Services, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
