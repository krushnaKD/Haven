import React from "react";
import doorway from "../assets/doorway.svg";

const Secondlast = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[85%] h-[80%] bg-[#004D49] rounded-xl grid grid-cols-2">
        <div className="flex flex-col items-center justify-center  gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#62CAC0] font-sans font-medium text-start text-xl ">
              Integration
            </h1>
            <h1 className="text-5xl text-start font-serif font-medium text-white leading-tighter">
              Haven integrates into <br /> your existing servicing <br />
              experience
            </h1>
            <p className="text-xl font-sans text-white ">
              Whether you service in-house or use a subservicer, <br /> launch
              deeper engagement with your borrowers in <br /> weeks (not months)
              with a platform that integrates into <br /> your existing
              servicing stack.
            </p>
            <button className="text-white text-start font-sans font-medium text-xl mt-5 hover:px-3">
              See how it works<i class="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
        <div className="flex mb-5 mr-10 items-end justify-end">
          <img src={doorway} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Secondlast;
