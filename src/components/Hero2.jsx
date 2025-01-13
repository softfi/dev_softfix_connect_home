import React from "react";
import profileImage from "../assets/06.01.2025_13.06.35_REC.png";
import { FaBatteryThreeQuarters, FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

const HeroComponent = () => {
  return (
    <div className="bg-gradient-to-b from-violet-100 via-white to-violet-50 py-12 px-6 md:px-16 lg:px-24 transition-all">
      {/* Container */}

      <div className="view-port mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm text-gray-600 mb-2">
            Powered by <span className=" tracking-wider ">SOFTFIX</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Effortless Communication, All in One Place
          </h1>
          <p className="mt-4 text-gray-600">
            Tired of switching between platforms for team meetings, personal
            chats, and group discussions? Our solution is built for seamless
            messaging, helping you stay connected without the hassle.
          </p>
          <div className="mt-6  relative lg:static z-20">
            {/* <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-all ">
              See Our Plans
            </button> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-1 relative items-center">
          {/* mobile container  */}
          <div className="relative z-10 border-8 overflow-hidden p-2 max-w-64 min-h-[31rem] border-black border-6 bg-gradient-to-r from-violet-300 via-cyan-100 to-blue-300  rounded-3xl space-y-1 shadow-xl">
            {/* Card: User Interaction */}

            <div className=" px-3 my-2 w-full transform ">
              <div className="flex justify-center">
                <div className="w-16 rounded-full h-4 bg-black "></div>
              </div>
            </div>
            <div className="">
              <div className=" px-3 mt-5 mb-[3rem] w-full transform ">
                <div className="flex justify-center">
                  <div className="">
                    <p className="text-5xl text-white">15:15</p>
                    <p className="text-white text-xs text-center">
                      January 13 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white backdrop-blur-3xl shadow-lg rounded-lg p-3 w-auto  mx-1  z-10 border-b  mb-1">
              <div className="flex items-center gap-4">
                <img
                  src={profileImage}
                  alt="User Avatar"
                  className="size-8 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-sm">M Raza</h3>
                  <p className="text-[0.65rem] text-gray-500">
                    Hey There Have You checked th...
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="bg-violet-600 text-white p-2 rounded-lg hover:bg-violet-700 transition-all text-[0.70rem]">
                  Answer
                </button>
              </div>
            </div> */}

            {/* Data Interaction Card */}
            <div className="bg-white/40 backdrop-blur shadow-lg rounded-lg p-3 w-full transform ">
              <div className="flex justify-between">
                <h4 className="font-semibold text-gray-800 text-xs">
                  New Notification
                </h4>
                <span class="relative flex size-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full size-2 bg-green-500"></span>
                </span>
              </div>
              <p className="text-gray-500 mt-2 text-xs">
                5 messages from Team EZ Logistics
              </p>
            </div>
            {/* <div className="bg-white shadow-lg rounded-lg p-3 w-full transform ">
              <div className="flex justify-between relative">
                {" "}
                <h4 className="font-semibold text-gray-800 text-xs">
                  New Notification
                </h4>
                <span class="relative flex size-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full size-2 bg-green-500"></span>
                </span>
              </div>
              <p className="text-gray-500 mt-2 text-xs">
                2 messages from Team QuickBid
              </p>
            </div> */}
            <div className="bg-white/40 backdrop-blur shadow-lg rounded-lg p-3 w-full transform ">
              <h4 className="font-semibold text-gray-800 text-xs">
                Unseen Messages
              </h4>
              <p className="text-gray-500 mt-2 text-xs">12 messages</p>
            </div>
            <div className=" absolute bottom-0 px-3 my-2 w-full transform ">
              <div className="flex justify-center">
                <div className="w-20  h-1 bg-white/60"></div>
              </div>
            </div>
          </div>
          {/* Decorative Floating Elements */}
          <div className="h-7 w-2 bg-black rounded-lg absolute left-[9.2rem] bottom-[23rem] "></div>
          <div className="h-11 w-2 bg-black rounded-lg absolute left-[9.2rem] bottom-[20rem] "></div>
          <div className="h-11 w-2 bg-black rounded-lg absolute left-[9.2rem] bottom-[17.2rem] "></div>
          <div className="h-12 w-2 bg-black rounded-lg absolute right-[9.2rem] bottom-[18rem] "></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-violet-200 rounded-full opacity-70 z-0"></div>
          <div className="absolute -bottom-10 -right-12 size-20 lg:size-24 bg-gradient-to-b rounded-full opacity-25 from-violet-500 to-[#D50683] "></div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
