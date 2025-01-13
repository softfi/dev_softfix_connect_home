import React from "react";
import profileImage from "../assets/06.01.2025_13.06.35_REC.png";

const HeroComponent = () => {
  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-violet-100 py-12 px-6 md:px-16 lg:px-24">
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
        <div className="flex-1 flex flex-col gap-1 relative">
          {/* Card: User Interaction */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm transform hover:scale-105 transition-all z-10 border-b border-violet-300">
            <div className="flex items-center gap-4">
              <img
                // src="https://via.placeholder.com/50"
                src={profileImage}
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">M Raza</h3>
                <p className="text-sm text-gray-500">
                  Hey There Have You checked th...
                </p>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-all">
                Answer
              </button>
            </div>
          </div>

          {/* Decorative Floating Elements */}
          <div className="absolute -top-12 -left-10 w-32 h-32 bg-violet-100 rounded-full opacity-70 z-0"></div>
          <div className="absolute -bottom-16 -right-12 w-24 h-24 bg-gradient-to-b rounded-full opacity-25 from-violet-500 to-[#D50683] "></div>

          {/* Data Interaction Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm transform hover:scale-105 transition-all border-b border-violet-300">
            <div className="flex justify-between">
              <h4 className="font-semibold text-gray-800">New Notification</h4>
              <span class="relative flex size-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full size-2 bg-green-500"></span>
              </span>
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              5 messages from Team EZ Logistics
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm transform hover:scale-105 transition-all border-b border-violet-300">
            <div className="flex justify-between relative">
              {" "}
              <h4 className="font-semibold text-gray-800">New Notification</h4>
              <span class="relative flex size-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full size-2 bg-green-500"></span>
              </span>
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              2 messages from Team QuickBid
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm transform hover:scale-105 transition-all border-b border-violet-300">
            <h4 className="font-semibold text-gray-800">Answered Messages</h4>
            <p className="text-gray-500 mt-2 text-sm">
              12 private messages today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
