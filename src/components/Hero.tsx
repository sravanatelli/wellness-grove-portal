
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 main-gradient opacity-10" />
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Your Personal
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {" "}Fitness Journey{" "}
            </span>
            Starts Here
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track your workouts, monitor your progress, and achieve your fitness goals with personalized AI-powered recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-3 rounded-full bg-primary text-white hover:opacity-90 transition-opacity flex items-center gap-2 hover-scale"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/about"
              className="px-8 py-3 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
