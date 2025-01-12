import React from "react";
import home from "../assets/home.webp";
import msg from "../assets/customers.webp"
import phone from "../assets/Phone.webp"
import { motion } from "motion/react";
const Midsecton = () => {
  return (
    <div className="w-full h-[130vh] font-serif flex flex-col items-center">
      <h1 className="text-5xl tracking-tight font-medium text-[#1C4044] text-center mt-24">
        We’re on a mission to make life <br /> simpler for homeowners
      </h1>
      <div className="w-[80%] grid grid-rows-3  h-[70%] mt-24 ">
        <div className="row-span-2 grid grid-cols-2 gap-5  p-5">
          <div className="bg-[#FDFDFB] h-[90%] shadow-lg  rounded-lg flex flex-col items-center gap-2 justify-center">
          <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
          }}
          viewport={{
            once: true,
          }}
          ><img className="w-[13vw]" src={home} alt="" /></motion.div>
            <h1 className="text-3xl ">Who We Are</h1>
            <p className="text-center font-sans text-xl ">
              Haven was founded on the premise that <br />
              Homeownership shouldn't be complicated or <br /> stressful. Meet
              our team.
            </p>
          </div> 
          <div className="bg-[#FDFDFB] h-[90%] shadow-lg rounded-lg flex flex-col items-center gap-2 justify-center">
          <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
          }}
          viewport={{
            once: true,
          }}
          ><img className="w-[13vw]" src={msg} alt="" /></motion.div>
            <h1 className="text-3xl ">Hear from our customers</h1>
            <p className="text-center font-sans text-xl ">
            We work with mortgage companies, helping <br />
            them connect with their customers more <br /> deeply than ever before.
            </p>
          </div>
        </div>
        <div className=" bg-[#FDFDFB] grid grid-cols-2 justify-items-center items-center shadow-lg  rounded-lg p-5">
            <div className="">
                <h1 className="text-4xl text-[#1C4044]">See our latest insights</h1>
                <p className="mt-2 text-xl">We’re busy creating content to help you <br /> implement our technology with clarity — and to <br /> good effect.</p>
            </div>
            <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5, ease: "easeIn" },
            }}
            viewport={{
              once: true,
            }}
            >
                <img className="w-[15vw]" src={phone} alt="" />
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Midsecton;
