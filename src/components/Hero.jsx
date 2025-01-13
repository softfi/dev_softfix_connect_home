import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-violet-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
        }}
      ></div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 lg:py-48">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
          Revolutionize Collaboration with SoftFix Teams
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl">
          Experience unmatched communication tools for teams to thrive, powered
          by SoftFix.
        </p>
        <div className="mt-6">
          <a
            href="#get-started"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium text-lg rounded-lg shadow-md"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
