import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const page = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative  dark:bg-stone-950 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.02]">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-white  dark:bg-gradient-to-t dark:from-stone-950 absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default page;
