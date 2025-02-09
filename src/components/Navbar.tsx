
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              FitTrack Hub
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/ai-insights" className="text-gray-600 hover:text-primary transition-colors">
              AI Insights
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/workouts" className="text-gray-600 hover:text-primary transition-colors">
              Workouts
            </Link>
            <Link to="/progress" className="text-gray-600 hover:text-primary transition-colors">
              Progress
            </Link>
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-full bg-primary text-white hover:opacity-90 transition-opacity"
            >
              Sign In
            </Link>
          </div>

          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
