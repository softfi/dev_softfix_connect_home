import React from "react";
import phoneMockUp from "../assets/phone_035-removebg-preview.png";
import { Md360, MdMargin, MdQueryStats, MdZoomIn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const CircularFeatures = () => {
  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-100 py-10 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Softfix Teams Features
        </h2>

        {/* Circle and Features */}
        <div className="relative flex items-center justify-center min-h-screen">
          {/* Central Image */}
          <div className="relative z-10 w-32 sm:w-64 md:w-80 transition-all">
            <img
              src={phoneMockUp}
              alt="Mobile Demo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Circular Layout */}
          <div className=" transition-all absolute w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[600px] md:h-[600px] rounded-full border-dotted border-red-300 border-2">
            {/* Feature Icons */}
            {/* Top Right */}
            <div className="absolute top-[20%] md:top-[20%] right-[-50%] sm:right-[-30%] md:right-[-10%] flex flex-row gap-2 items-center text-center">
              <div className="size-8 sm:size-12 bg-white hover:bg-violet-200 hover:text-violet-600 rounded-full flex items-center justify-center shadow-md">
                <IoMdTime size={20} />
              </div>
              <h4 className=" text-xs lg:text-sm font-semibold mt-2 text-nowrap ">
                Margin Plus
              </h4>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[20%] md:bottom-[20%] right-[-75%] sm:right-[-45%] md:right-[-18%] flex flex-row gap-2 items-center text-center">
              <div className="size-8 sm:size-12 bg-white hover:bg-violet-200 hover:text-violet-600 rounded-full flex items-center justify-center shadow-md">
                <IoMdTime size={20} />
              </div>
              <h4 className="text-xs lg:text-sm font-semibold mt-2 text-nowrap ">
                Real-Time Pledging
              </h4>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[18%] md:bottom-[20%] left-[-40%] sm:left-[-22%] md:left-[-8%] flex flex-row-reverse gap-2 items-center text-center">
              <div className="size-8 sm:size-12 bg-white hover:bg-violet-200 hover:text-violet-600 rounded-full flex items-center justify-center shadow-md">
                <Md360 size={20} />
              </div>
              <h4 className="text-xs lg:text-sm font-semibold mt-2 text-nowrap ">
                360 View
              </h4>
            </div>

            {/* Top Left */}
            <div className="absolute left-[-80%] top-[20%] md:top-[20%] sm:left-[-48%] md:left-[-20%] flex flex-row-reverse gap-2 items-center text-center">
              <div className="size-8 sm:size-12 bg-white hover:bg-violet-200 hover:text-violet-600 rounded-full flex items-center justify-center shadow-md">
                <MdZoomIn size={20} />
              </div>
              <h4 className="text-xs lg:text-sm font-semibold mt-2 text-nowrap ">
                Derivatives Strategies
              </h4>
            </div>

            {/* Top Center */}
            <div className="absolute top-[-13%] md:top-[-5%] left-[65%] md:left-[60%] transform -translate-x-1/2 flex flex-row gap-2 items-center text-center">
              <div className="size-8 sm:size-12 bg-white hover:bg-violet-200 hover:text-violet-600 rounded-full flex items-center justify-center shadow-md">
                <MdMargin size={20} />
              </div>
              <h4 className="text-xs lg:text-sm font-semibold mt-2 text-nowrap ">
                Margin Plus.
              </h4>
            </div>
            <div className="absolute bottom-[-13%] md:bottom-[-4%] left-[65%] md:left-[60%] transform -translate-x-1/2 flex flex-row gap-2 items-center text-center">
              <div className="size-8 sm:size-12 bg-white hover:bg-violet-200 hover:text-violet-600 rounded-full flex items-center justify-center shadow-md">
                <MdMargin size={20} />
              </div>
              <h4 className="text-xs lg:text-sm font-semibold mt-2 text-nowrap ">
                Margin Plus.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularFeatures;
