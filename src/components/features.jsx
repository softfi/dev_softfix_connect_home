import React from "react";

const FeaturesGrid = () => {
  const features = [
    {
      title: "HD Video Calls",
      icon: "🎥",
    },
    {
      title: "Screen Sharing",
      icon: "💻",
    },
    {
      title: "Call Recording",
      icon: "📼",
    },
    {
      title: "Chat",
      icon: "💬",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="view-port mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg p-6 text-center transition"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
