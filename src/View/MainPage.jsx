import React from "react";
import NavBar from "../Components/Common/NavBar";
import Hero from "../Components/Hero";
import Review from "../Components/Review";
import UniqueSelling from "../Components/UniqueSelling";
import Service from "../Components/Service";
import ChooseNamo from "../Components/ChooseNamo";
import Clients from "../Components/Clients";
import Footer from "../Components/Common/Footer";
import ContactUs from "../Components/ContactUs";
import Blog from "../Components/Blog";
import Backtotop from "../Components/Common/BackToTop";

const MainPage = () => {
  return <>
  <div className="overflow-hidden">
  <Backtotop />
    <div className="lg:h-screen flex items-center flex-col">
    <NavBar />
    <Hero />
    </div>
    <Review />
    <UniqueSelling />
    <Service />
   <ChooseNamo />
   <Clients />
   <Blog />
   <ContactUs />
   <Footer />
  </div>
  
  </>
};

export default MainPage;
