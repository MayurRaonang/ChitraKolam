import { Bot, Users, Layout, Upload, BookOpen, Compass, Save } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#fdf6ec] text-center py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-red-800">
        Welcome to ChitraKolam
      </h1>
      <p className="text-xl font-semibold text-yellow-600 mt-3">
        Tradition Meets Technology
      </p>
      <p className="max-w-2xl mx-auto text-gray-700 mt-4">
        Analyze and explore Kolam designs inspired by Indian traditions.
        Discover the mathematical beauty and cultural significance of these
        ancient patterns through our advanced digital tools and comprehensive
        design library.
      </p>

      {/* Features row */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <div className="flex items-center space-x-2 text-red-700">
          <Bot className="text-pink-500" size={22} />
          <span className="font-medium">AI-Powered Analysis</span>
        </div>
        <div className="flex items-center space-x-2 text-red-700">
          <Layout className="text-green-600" size={22} />
          <span className="font-medium">Traditional Patterns</span>
        </div>
        <div className="flex items-center space-x-2 text-red-700">
          <Users className="text-purple-600" size={22} />
          <span className="font-medium">Community Driven</span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
        {/* Card 1 */}
        <div className="bg-white border-2 border-yellow-400 rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="bg-red-700 text-white p-3 rounded-full mb-4">
            <Upload size={24} />
          </div>
          <h3 className="text-lg font-bold text-red-700">Upload Kolam</h3>
          <p className="text-gray-600 text-sm mt-2">
            Share designs and get AI-powered feedback
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-medium px-4 py-2 rounded-md mt-4">
            Analyze & Share
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-2 border-yellow-400 rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="bg-red-700 text-white p-3 rounded-full mb-4">
            <BookOpen size={24} />
          </div>
          <h3 className="text-lg font-bold text-red-700">Pattern Library</h3>
          <p className="text-gray-600 text-sm mt-2">
            Browse thousands of authentic Kolam patterns
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-medium px-4 py-2 rounded-md mt-4">
            View Patterns
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-2 border-yellow-400 rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="bg-red-700 text-white p-3 rounded-full mb-4">
            <Compass size={24} />
          </div>
          <h3 className="text-lg font-bold text-red-700">Explore Designs</h3>
          <p className="text-gray-600 text-sm mt-2">
            Discover regional variations and learn cultural significance
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-medium px-4 py-2 rounded-md mt-4">
            Start Exploring
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-white border-2 border-yellow-400 rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="bg-red-700 text-white p-3 rounded-full mb-4">
            <Bot size={24} />
          </div>
          <h3 className="text-lg font-bold text-red-700">Kolam Assistant</h3>
          <p className="text-gray-600 text-sm mt-2">
            AI-powered guide to help create your perfect patterns
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-medium px-4 py-2 rounded-md mt-4">
            Get Help
          </button>
        </div>

        {/* Card 5 */}
        <div className="bg-white border-2 border-yellow-400 rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="bg-red-700 text-white p-3 rounded-full mb-4">
            <Save size={24} />
          </div>
          <h3 className="text-lg font-bold text-red-700">Saved Designs</h3>
          <p className="text-gray-600 text-sm mt-2">
            Access your favorite patterns and personal creations
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-medium px-4 py-2 rounded-md mt-4">
            View Collection
          </button>
        </div>
      </div>
    </section>
  );
}
