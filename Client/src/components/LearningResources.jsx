// src/components/LearningResources.jsx

import { FaVideo, FaTools, FaUsers } from "react-icons/fa";

const LearningResources = () => {
  const resources = [
    {
      icon: <FaVideo className="text-white text-2xl" />,
      title: "Video Tutorials",
      description:
        "Step-by-step video guides from master artists and cultural experts",
      points: [
        "Beginner Basics",
        "Advanced Techniques",
        "Regional Styles",
        "Festival Specials",
      ],
      buttonText: "Start Learning",
    },
    {
      icon: <FaTools className="text-white text-2xl" />,
      title: "Interactive Tools",
      description:
        "Practice with our digital drawing tools and pattern generators",
      points: ["Design Canvas", "Pattern Generator", "Symmetry Checker", "Color Palette"],
      buttonText: "Try Tools",
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: "Community Forum",
      description:
        "Connect with fellow artists and share your creative journey",
      points: ["Share Designs", "Get Feedback", "Monthly Challenges", "Expert Q&A"],
      buttonText: "Join Community",
    },
  ];

  return (
    <section className="bg-[#fff5f0] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Learning Resources
        </h2>
        <p className="text-gray-600 mt-2">
          Master the art of Kolam with our comprehensive tutorials and guides
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-left flex flex-col items-start"
            >
              <div className="bg-red-700 p-3 rounded-md">{res.icon}</div>
              <h3 className="text-xl font-semibold text-red-700 mt-4">
                {res.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{res.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {res.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md font-medium">
                {res.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningResources;