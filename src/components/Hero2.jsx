import React from "react";
import profileImage from "../assets/06.01.2025_13.06.35_REC.png";
import { FaBatteryThreeQuarters, FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import phoneMock from "../assets/newphoneMockup.png";

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
          <div className="phone_mock_Container">
            <img src={phoneMock} className="w-64" alt="" />
          </div>
          <div className="absolute -top-10 -left-8 w-32 h-32 bg-violet-200 rounded-full opacity-70 z-0"></div>
          <div className="absolute -bottom-10 -right-8 size-20 lg:size-24 bg-gradient-to-b rounded-full opacity-25 from-violet-500 to-[#D50683] "></div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
