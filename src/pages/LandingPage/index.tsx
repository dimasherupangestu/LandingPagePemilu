import React from "react";
import Navbar from "pages/LandingPage/nav";
import Hero from "./hero";
import CardCaleg from "./CardCaleg";
import Footer from "./Footer";
import Content from "./Content";

const LandingPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-blue-gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full bg-slate-200">
        <Navbar />
        <Hero />
        <CardCaleg />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default LandingPagePage;
