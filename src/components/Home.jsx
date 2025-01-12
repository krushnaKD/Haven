import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Scrollanimation from "./Scrollanimation";
import Midsecton from "./Midsecton";
import Secondlast from "./Secondlast";
import { motion } from "motion/react";

const Home = () => {
  return (
    <>
      <div className="w-full h-full font-serif ">
        <Hero />
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1, delay: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute top-[80%] w-full h-screen flex flex-col items-center justify-center "
        >
          <img
            className=""
            src="https://havenservicing.com/static/ce164a33e2a480b5f09032832e685842/haven-dashboard-2.svg"
            alt=""
          />
        </motion.div>

        <div className="w-full h-screen mt-[90vh]  ">
          <div className="w-full h-[20vh] flex justify-around items-center text-[#068466]">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
              }}
              viewport={{
                once: true,
              }}
              className="text-center text-5xl font-bold  tracking-tight flex flex-col"
            >
              1.4M+
              <span className="text-xl text-black font-medium">Hometown</span>
            </motion.h1>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.6, duration: 0.7, ease: "easeIn" },
              }}
              viewport={{
                once: true,
              }}
              className="text-center text-5xl font-bold  tracking-tight "
            >
              11% <br />
              <span className="text-xl text-black font-medium">
                high-intent leads <br />
              </span>
            </motion.h1>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.9, duration: 0.9, ease: "easeIn" },
              }}
              viewport={{
                once: true,
              }}
              className="text-center text-5xl font-bold  tracking-tight flex flex-col"
            >
              11+
              <span className="text-xl text-black font-medium">
                offer types
              </span>
            </motion.h1>
          </div>
          <div className="grid grid-rows-[auto,1fr,auto] h-screen gap-4 p-4 mt-14 ">
            <div className=" p-4 ">
              <h1 className="text-center font-medium text-5xl tracking-tight">
                The most effective way to <br /> retain homeowners
              </h1>
              <p className="text-xl text-center mt-5 font-normal">
                Predict prepayment and deliver personalized offers that convert
                by <br /> making the tough decisions of homeownership simple and
                intuitive.
              </p>
            </div>
            <div className="w-full flex items-center justify-center ">
              <div className="w-[80%] grid grid-cols-3 gap-5  mt-5 text-white">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="w-[24vw] bg-[#004D49] rounded-3xl p-5 bg-[url(https://havenservicing.com/static/5316b58d87c030a171a640fc6a1e0115/14908/servicer.webp)] bg-[center_bottom_3rem] bg-no-repeat bg-[length:300px_260px] "
                >
                  <h1 className="text-4xl ml-2 text-white font-semibold">
                    For Services
                  </h1>
                  <p className=" mt-5 text-lg  font-medium tracking-normal font-sans">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Natus, magnam. Lorem ipsum dolor sit, amet consectetur
                    adipisicing.
                  </p>
                  <button className="mt-[30vh] text-2xl font-medium transition ease-in-out hover:px-4 ">
                    Servicer <i className="ri-arrow-right-s-line"></i>
                  </button>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.6, duration: 0.5, ease: "easeIn" },
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="w-[24vw] bg-[#004D49]  rounded-3xl bg-[url(https://havenservicing.com/static/ff39766aae5f14d201d9bf27d2363fac/98613/subservicer.webp)] bg-[center_bottom_2rem] bg-no-repeat bg-[length:300px_260px] p-5"
                >
                  <h1 className="text-4xl tracking-tighter ml-2 text-white font-semibold">
                    For Subservicer
                  </h1>
                  <p className=" mt-5 text-lg  font-medium tracking-normal font-sans ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Natus, magnam. Lorem ipsum dolor sit, amet consectetur
                    adipisicing.
                  </p>
                  <button className="mt-[30vh] text-2xl font-medium hover:px-4 transition-all ease-in-out font-serif">
                    Subservicer<i className="ri-arrow-right-s-line"></i>
                  </button>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.8, duration: 0.5, ease: "easeIn" },
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="w-[24vw] m bg-[#004D49] rounded-3xl p-5 bg-[url(https://havenservicing.com/static/bc1fdbf5bf0368adcd8c484e9847e537/2d1d2/lender.webp)] bg-[center_bottom_2rem] bg-no-repeat bg-[length:300px_260px]"
                >
                  <h1 className="text-4xl tracking-tighter ml-2 text-white font-semibold">
                    For Lenders
                  </h1>
                  <p className=" mt-5 text-lg  font-medium tracking-normal font-sans ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Natus, magnam. Lorem ipsum dolor sit, amet consectetur
                    adipisicing.
                  </p>
                  <button className="mt-[30vh] text-2xl font-medium transition ease-in-out hover:px-4 font-serif">
                    Lender<i className="ri-arrow-right-s-line"></i>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scrollanimation />
      <Midsecton />
      <Secondlast />
    </>
  );
};

export default Home;

//
