import React from "react";
import profileImage from "../assets/06.01.2025_13.06.35_REC.png";
import samWilson from "../assets/prof-4.png";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-violet-100 via-white to-violet-50 text-gray-800 py-12 px-6 md:px-16 lg:px-24">
      {/* Container */}
      <div className="view-port mx-auto flex flex-col lg:flex-row-reverse items-center gap-8">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Track Your Team's Progress at a Glance
          </h1>
          <p className="mt-4 text-gray-600">
            Stay updated on ongoing projects, individual contributions, and
            upcoming milestones — all in one place.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-all">
              Get Started
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Top Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src={samWilson} alt="" className="rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold">Sam Wilson</h3>
                <p className="text-sm text-gray-500">Product Designer</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-sm">In progress</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
                <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
                <span className="w-8 h-1 bg-violet-600 rounded-full"></span>
                <span className="w-8 h-1 bg-gray-300 rounded-full"></span>
                <span className="w-8 h-1 bg-gray-300 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <div className="flex items-center gap-4">
            <img
              //   src="https://via.placeholder.com/50"
              src={profileImage}
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-gray-600 text-sm">4.9 from 100+ reviews</p>
            </div>
          </div>

          {/* Payment Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all">
            <h4 className="font-semibold">Upcoming Deadlines</h4>
            <div className="mt-4 text-sm text-gray-500 space-y-4">
              <p>
                <b>Sam Wilson</b>: Complete homepage redesign – Due:{" "}
                <b>Jan 15</b>
              </p>
              <p>
                <b>Samantha Fox</b>: Finalize user testing – Due: <b>Jan 20</b>
              </p>
              <button className="mt-4 text-violet-600 underline">
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
