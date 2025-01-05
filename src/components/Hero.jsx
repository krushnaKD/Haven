import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="background-container w-full h-screen relative">
      <Navbar />

      <div className="w-full h-[60vh] mt-10 flex flex-col items-center ">
        <h1 className="text-[#068466] font-medium text-xl">Meet Heaven</h1>
        <h1 className="text-7xl text-[#1C4044] font-extrabold tracking-tighter mt-4">
          Get the most out of{" "}
        </h1>
        <span className="text-7xl text-[#1C4044] font-extrabold tracking-tighter">
          MSR
        </span>
        <p className="text-center text-[#1C4044] font-medium text-xl mt-4">
          Drive meaningful engagement via servicing — helping you understand,
          <br /> educate, and convert borrowers for mortgage & beyond.
        </p>
        <button className="px-14 py-2 mt-10 text-lg bg-[#068466] rounded-lg text-white hover:bg-[#1C4044]">
          Get-a-Demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
