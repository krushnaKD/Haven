import React from "react";
import homet from "../assets/home-svgrepo-com.svg";

const Footer = () => {
  return (
    <div className="w-full h-[130vh] bg-[#004D49] mt-20 flex flex-col items-center  p-10">
      <div className="w-[80%] h-[55vh] bg-transparent rounded-3xl border-[1px] border-zinc-500 flex flex-col items-center justify-center gap-10 mt-10">
        <h1 className="text-6xl font-serif text-[#FFFFFF] text-center   ">
          Unlock a new chapter — make <br /> home ownership make sense
        </h1>
        <button className="px-[100px] py-2 text-xl  bg-[#068466] rounded-lg text-white hover:bg-[#1C4044]">
          Get a Demo
        </button>
      </div>
      <div className="w-[80%] p-10 h-[40vh]  grid grid-cols-5 mt-20">
        <div className=" h-full">
          <h1 className="text-zinc-500 text-lg mb-1">We're Haven</h1>
          <div className="text-white flex flex-col gap-2 cursor-pointer">
            <h1 className="text-md font-medium hover:text-[#DDAE71]">
              How It Works
            </h1>
            <h1 className="text-md font-medium hover:text-[#DDAE71]">
              For Servicers
            </h1>
            <h1 className="text-md font-medium hover:text-[#DDAE71]">
              {" "}
              For Subservicers
            </h1>
            <h1 className="text-md font-medium hover:text-[#DDAE71]">
              For Lenders
            </h1>
          </div>
        </div>
        <div className="col-span-3 flex h-full gap-16   ml-10">
          <div>
            <h1 className="text-zinc-500 text-xl mb-2">Resources</h1>
            <h1 className="text-zinc-400">
              Blog{" "}
              <span className=" p-[2px] ml-1 text-xs bg-[#F4B271] text-[#0e2d2b] rounded-md">
                Comming Soon
              </span>
            </h1>
          </div>
          <div>
            <h1 className="text-zinc-500 text-lg mb-2">Support</h1>
            <div className="mb-2 flex flex-col gap-2">
              <h1 className="text-lg text-white hover:text-[#DDAE71]">
                Security & Compliance
              </h1>
              <h1 className="text-lg text-white hover:text-[#DDAE71]">
                {" "}
                Why is Haven involved?
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-zinc-500 text-lg mb-2">Company</h1>
            <div className="flex flex-col gap-2 text-white text-lg font-sans cursor-pointer">
              <h1 className="hover:text-[#DDAE71]">About</h1>
              <h1 className="hover:text-[#DDAE71]">Pressroom</h1>
              <h1 className="hover:text-[#DDAE71]">Careers</h1>
              <h1 className="hover:text-[#DDAE71]">Contact</h1>
            </div>
          </div>
        </div>
        <div className="h-full ml-10 flex justify-end items-start">
          <img className="w-[6vw] " src={homet} alt="" />
        </div>
      </div>
      <div className="w-full h-[5vh] flex flex-col items-center justify-start">
        <h1 className="text-2xl font-serif text-white">
          Get the latest in customer retention
        </h1>
      </div>
      <div className="flex items-start justify-start gap-2" >
        <input
          className="p-20 py-2 rounded-md text-start outline-none"
          type="text"
          placeholder="Enter your email address"
        />
        <button className="px-4 py-[6px] text-xl  bg-[#068466] rounded-lg text-white hover:bg-[#1C4044]">
         Subscribe
        </button>
      </div>
      <div className="w-full grid grid-cols-5 mt-[10vh] p-20">
        <div className="flex gap-5 ">
        <i className="ri-facebook-circle-fill text-white text-2xl hover:text-zinc-400 cursor-pointer"></i>
        <i className="ri-twitter-fill text-white text-2xl hover:text-zinc-400 cursor-pointer"></i>
        <i className="ri-linkedin-box-fill text-white text-2xl hover:text-zinc-400 cursor-pointer"></i>
        </div>
        <div className="col-span-3 flex ml-10 gap-5 items-center justify-center">
          <h1 className="text-white hover:text-[#DDAE71] cursor-pointer">Privacy Policy</h1>
          <h1 className="text-white hover:text-[#DDAE71] cursor-pointer">Terms of Use</h1>
          <h1 className="text-white hover:text-[#DDAE71] cursor-pointer">Coordinated Disclosure Policy</h1>
        </div>
        <h1 className="text-white text-md ">© 2025 Haven. All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
