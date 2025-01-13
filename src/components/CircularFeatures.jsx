import React from "react";
import phoneMockUp from "../assets/phone_035-removebg-preview.png";
import { Md360, MdMargin, MdQueryStats, MdZoomIn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const CircularFeatures = () => {
  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-100 py-5">
      <div className="view-port mx-auto">
        <div className="">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center text-gray-800 pt-5">
            Softfix Teams Features
          </h2>
        </div>
        <div className="">
          <div className="relative flex items-center justify-center min-h-screen  ">
            {/* Central Image */}
            <div className="relative z-10 flex items-center justify-center size-96">
              <img src={phoneMockUp} alt="Mobile Demo" className="w-full" />
            </div>

            {/* Circular Features */}
            <div className="absolute size-[600px] rounded-full border-dotted border-red-300 border-[2px]">
              {/* Top Right */}
              <div className="absolute top-[142px] right-[-6rem] text-center transform -translate-y-10">
                <div className="flex flex-row gap-4 items-center">
                  <div className="size-20 bg-white hover:text-violet-600 hover:bg-violet-200 cursor-pointer  rounded-full flex items-center justify-center shadow">
                    {/* Replace with Icon */}
                    <IoMdTime size={30} />
                  </div>
                  <h4 className="mt-2 font-semibold">Margin Plus</h4>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-[14rem] right-[-12rem] text-center transform translate-y-10">
                <div className="flex flex-row gap-4 items-center">
                  <div className="size-20 bg-white hover:text-violet-600 hover:bg-violet-200 cursor-pointer  rounded-full flex items-center justify-center shadow">
                    <IoMdTime size={30} />
                  </div>
                  <h4 className="mt-2 font-semibold">Real-Time Pledging </h4>
                </div>
              </div>
              {/* Bottom Right */}
              <div className="absolute bottom-[2rem] right-[-3rem] text-center transform translate-y-10">
                <div className="flex flex-row gap-4 items-center">
                  <div className="size-20 bg-white hover:bg-violet-200 hover:text-violet-600 cursor-pointer  rounded-full flex items-center justify-center shadow">
                    <Md360 size={30} />
                  </div>
                  <h4 className="mt-2 font-semibold">Real-Time Pledging 1</h4>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-[16rem] left-[-12.5rem] text-center transform translate-y-10">
                <div className="flex flex-row-reverse gap-4 items-center">
                  <div className="size-20 bg-white hover:bg-violet-200 hover:text-violet-600 cursor-pointer  rounded-full flex items-center justify-center shadow">
                    <MdQueryStats size={30} />
                  </div>
                  <h4 className="mt-2 font-semibold">
                    Rich Derivatives Data 2
                  </h4>
                </div>
              </div>
              {/* Bottom Left */}
              <div className="absolute bottom-[2rem] left-[-4rem] text-center transform translate-y-10">
                <div className="flex flex-row-reverse gap-4 items-center">
                  <div className="size-20 bg-white hover:bg-violet-200 hover:text-violet-600 cursor-pointer  rounded-full flex items-center justify-center shadow">
                    <MdQueryStats size={30} />
                  </div>
                  <h4 className="mt-2 font-semibold">
                    Rich Derivatives Data 2
                  </h4>
                </div>
              </div>

              {/* Top 2 Left */}
              <div className="absolute top-[6rem] left-[-8rem] text-center transform -translate-y-10">
                <div className="flex flex-row-reverse gap-4 items-center">
                  <div className="size-20 bg-white hover:bg-violet-200 hover:text-violet-600 cursor-pointer  rounded-full flex items-center justify-center shadow">
                    <MdZoomIn size={30} />
                  </div>
                  <h4 className="mt-2 font-semibold">Derivatives Strategies</h4>
                </div>
              </div>
              {/* Top 1 Left */}
              <div className="absolute top-[0px] left-[18rem] text-center transform -translate-y-10">
                <div className="flex flex-row gap-4 items-center justify-between">
                  <div className="size-20 bg-white hover:bg-violet-200 hover:text-violet-600  cursor-pointer  rounded-full flex items-center justify-center shadow">
                    <MdMargin size={30} />
                  </div>
                  <h4 className="mt-2 font-semibold">Margin Plus</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularFeatures;
