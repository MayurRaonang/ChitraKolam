import { Heart } from "lucide-react";
import pongal from "../assets/pongal.jpg"
import lotus from "../assets/lotus.jpg"
import peacock from "../assets/peacock.jpg"
import geometry from "../assets/geometry.jpg"
export default function FeaturedPatterns() {
  const patterns = [
    {
      title: "Pongal Kolam",
      desc: "Traditional harvest festival pattern with 15 dots arrangement",
      tag: "Festival",
      tagColor: "bg-yellow-500 text-white",
      img: pongal // Replace with your image
    },
    {
      title: "Lotus Kolam",
      desc: "Sacred lotus design symbolizing purity and spiritual awakening",
      tag: "Spiritual",
      tagColor: "bg-yellow-500 text-white",
      img: lotus, // Replace with your image
    },
    {
      title: "Peacock Kolam",
      desc: "Elegant peacock motif representing beauty and grace in Indian culture",
      tag: "Animal Patterns",
      tagColor: "bg-yellow-500 text-white",
      img: peacock, // Replace with your image
    },
    {
      title: "Geometric Kolam",
      desc: "Mathematical precision meets artistic expression in this complex design",
      tag: "Geometric",
      tagColor: "bg-yellow-500 text-white",
      img: geometry, // Replace with your image
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-800">
        Featured Kolam Patterns
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        Discover the most popular and culturally significant designs from our collection
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {patterns.map((pattern, index) => (
          <div
            key={index}
            className="bg-[#fdf6ec] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={pattern.img}
              alt={pattern.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold text-red-700">{pattern.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{pattern.desc}</p>

              <div className="flex justify-between items-center mt-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${pattern.tagColor}`}
                >
                  {pattern.tag}
                </span>
                <Heart className="text-red-600 w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-red-800 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md shadow-md">
          View Complete Gallery →
        </button>
      </div>
    </section>
  );
}
