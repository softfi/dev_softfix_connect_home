import React from "react";

const FeaturesGrid = () => {
  const features = [
    {
      title: "HD Video Calls",
      description: "Crystal-clear video quality.",
      icon: "🎥",
    },
    {
      title: "Screen Sharing",
      description: "Share your screen easily.",
      icon: "💻",
    },
    {
      title: "Call Recording",
      description: "Save your important calls.",
      icon: "📼",
    },
    {
      title: "Chat",
      description: "Stay connected through instant messaging.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="view-port mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
