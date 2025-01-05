import React from "react";
import whiteback from "../assets/whiteback.png";

const Scrollanimation = () => {
  return (
    <>
    <div className="anim w-full h-screen mt-[40vh] font-serif flex flex-col items-center">
      <h1 className="text-center font-medium text-5xl tracking-tighter leading-[50px] text-[#1C4044]">
        Generate value with your <br /> borrowers through an all-in-one <br />{" "}
        hub for home finances
      </h1>
      <div className="w-[80%] h-[70%] bg-[#EBEAEF] mt-10 rounded-lg grid grid-cols-2 gap-2">
        <div className=" w-[23vw] flex flex-col justify-center ml-24">
          <div className="relative bg-white shadow-xl h-[42vh] rounded-md p-4">
            <h1 className="text-xl ">
              What are your top 5 fianancial <br /> goals this years ?
            </h1>
            <div className="w-full">
              <button className="text-white bg-[#CDD0EC] px-4 py-2 text-sm rounded-3xl mt-2">
                Paying off high cost debt
              </button>
              <button className="text-sm px-3 py-2 border-dashed border-2 border-sky-200 ml-2 rounded-3xl ">
                Build Savings
              </button>
            </div>
            <div className="mt-2 flex">
              <button className="text-sm px-5 py-2 border-dashed border-2 border-sky-200  rounded-3xl ">
                Save for Retirement
              </button>
              <button className="text-white bg-[#CDD0EC] px-4 py-2 text-sm rounded-3xl ml-1 ">
                Move to new home
              </button>
            </div>
            <div className="mt-2">
              <button className="text-white bg-[#CDD0EC] px-5 py-2 text-sm rounded-3xl ml-1 ">
                Accelerate my mortage paydown
              </button>
            </div>
            <div className="mt-2">
              <button className="text-sm px-5 py-2 border-dashed border-2 border-sky-200  rounded-3xl ">
                Purchase an investment Property
              </button>
            </div>
          </div>
        </div>
        <div className="anim flex flex-col justify-center ">
          <h1 className="text-start text-5xl mb-5">
            Understand <br /> borrower intent
          </h1>
          <p>
            Anticipate your borrowers’ future plans ahead of <br /> anyone else
            with modules that help borrowers <br /> build a plan for their homes
            and their futures.
          </p>
        </div>
        
      </div>
    </div>
    
    </>
  );
};

export default Scrollanimation;
