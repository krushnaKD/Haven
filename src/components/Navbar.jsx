import React, { useState } from "react";
import { motion } from "motion/react";
import servier from "../assets/servicer.webp";
import subservicers from "../assets/subservicers.webp";
import lenders from "../assets/lenders.webp";
import home from "../assets/home.webp"
import Pressroom from "../assets/Pressroom.webp"
import Careers from "../assets/Careers.webp"
import contact from "../assets/contact.webp"


const Navbar = () => {
  const [hover, sethover] = useState(false);
  const [secondhover, setsecondhover] = useState(false);

  const handleMouseEnter = () => sethover(true);
  const handleMouseLeave = () => sethover(false);

  const sechandleMouseEnter = () => setsecondhover(true);
  const sechandleMouseLeave = () => setsecondhover(false);

  return (
    <div className="min-h-[50px] w-full flex justify-between items-center p-5 px-10">
      <h1 className="text-[#068466] font-semibold text-2xl">Haven</h1>
      <div className=" flex gap-4 font-normal text-xl cursor-pointer">
        <h2>How it Works</h2>
        <h2
          className={`relative `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Use Cases
          <i className={`ri-arrow-down-s-line `}></i>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
            }}
            className={` absolute ${
              hover == false ? "hidden" : ""
            }  mt-1 ml-[1vw] w-[24vw]  bg-[#FFFFFF] rounded-3xl p-3 `}
          >
            <div className="flex  w-full gap-5  p-3 hover:bg-yellow-50 rounded-lg">
              <img className="w-[30%]" src={servier} alt="" />
              <div className="w-60% flex flex-col gap-2">
                <h1 className="text-lg font-sans  font-semibold ">
                  For Service
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
                  dolor sit amet.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-5 p-3 hover:bg-yellow-50 rounded-lg">
              <img className="w-[40%]" src={subservicers} alt="" />
              <div className="w-60% flex flex-col gap-2">
                <h1 className="text-lg font-sans  font-semibold ">
                  For Subservice
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
                  dolor sit amet.
                </p>
              </div>
            </div>
            <div className="flex w-full gap-5 p-3 hover:bg-yellow-50 rounded-lg">
              <img className="w-[40%]" src={lenders} alt="" />
              <div className="w-60% flex flex-col gap-2">
                <h1 className="text-lg font-sans  font-semibold ">
                  For Lenders
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
                  dolor sit amet.
                </p>
              </div>
            </div>
          </motion.div>
        </h2>
        <h2
          className={`relative `}
          onMouseEnter={sechandleMouseEnter}
          onMouseLeave={sechandleMouseLeave}
        >
          Company <i className="ri-arrow-down-s-line "></i>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
            }}
            exit={{ y: 20, opacity: 0, scale: 0.5 }}
            className={` absolute ${
              secondhover == false ? "hidden" : ""
            } mt-1  ml-[2vw] w-[24vw] h-[55vh] p-2 bg-[#FFFFFF] rounded-3xl grid grid-rows-4 `}
          >
            <div className="flex w-full flex-col object-">
              <div className="flex w-full gap-5 p-3 hover:bg-[#F9F7F3] rounded-lg">
                <img className="w-[25%]" src={home} alt="" />
                <div className="w-60% flex flex-col gap-2">
                  <h1 className="text-sm  font-sans  font-semibold ">
                    About Haven
                  </h1>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing Lorem
                    ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-5 p-3 hover:bg-[#F9F7F3] rounded-lg">
                <img className="w-[25%]" src={Pressroom} alt="" />
                <div className="w-60% flex flex-col gap-2">
                  <h1 className="text-sm  font-sans  font-semibold ">
                    Pressroom
                  </h1>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing Lorem
                    ipsum dolor sit amet.
                  </p>
                </div>
              </div>
                <div className="flex w-full gap-5 p-3 hover:bg-[#f4eee1] rounded-lg">
                <img className="w-[25%]" src={Careers} alt="" />
                <div className="w-60% flex flex-col gap-2">
                  <h1 className="text-sm  font-sans  font-semibold ">
                  Careers
                  </h1>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing Lorem
                    ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-5 p-3 hover:bg-[#F9F7F3] rounded-lg">
                <img className="w-[25%]" src={contact} alt="" />
                <div className="w-60% flex flex-col gap-2">
                  <h1 className="text-sm  font-sans  font-semibold ">
                    Contact
                  </h1>
                  <p className="text-xs hover:text-gray-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing Lorem
                    ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </motion.div>
        </h2>
      </div>
      <button className="px-3 py-1 text-lg bg-[#068466] rounded-lg text-white hover:bg-[#1C4044]">
        Get-a-Demo
      </button>
    </div>
  );
};

export default Navbar;
