import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedPatterns from "../components/FeaturedPatterns";
import StatsByNumber from "../components/StatsByNumber";
import LearningResources from "../components/LearningResources";
import MissionSection from "../components/MissionSection";

export default function LandingPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <FeaturedPatterns/>
      <LearningResources/>
      <MissionSection/>
      <StatsByNumber/>
      
    </div>
  );
}
