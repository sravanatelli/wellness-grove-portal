
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { features } from "@/components/Features";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FeatureDetails = () => {
  const { featureId } = useParams();
  const { toast } = useToast();
  
  const feature = features.find((f) => f.title.toLowerCase().replace(/\s+/g, "-") === featureId);

  if (!feature) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-2xl font-bold">Feature not found</h1>
        </div>
      </div>
    );
  }

  const handleTryFeature = () => {
    toast({
      title: "Coming Soon",
      description: "This feature is currently under development. Stay tuned!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-start gap-6">
            <feature.icon className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h1 className="text-3xl font-bold mb-4">{feature.title}</h1>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-gray-50">
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-3 text-gray-600">
                    {getFeaturesList(feature.title).map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={handleTryFeature}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Try this Feature
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getFeaturesList = (featureTitle: string): string[] => {
  switch (featureTitle) {
    case "AI-Powered Insights":
      return [
        "Personalized workout recommendations",
        "AI-driven nutrition plans",
        "Smart adaptive workouts",
        "Progress-based goal refinements",
        "Visual analytics and insights",
      ];
    case "Workout Tracking":
      return [
        "Log exercises, sets, reps, and weights",
        "Real-time progress tracking",
        "Goal setting and monitoring",
        "Wearable device integration",
        "Visual workout metrics",
      ];
    case "Progress Analytics":
      return [
        "Detailed fitness metrics and charts",
        "Historical workout analysis",
        "AI-based performance insights",
        "Achievement milestones",
        "Interactive progress visualization",
      ];
    case "Health Monitoring":
      return [
        "Vital health metrics tracking",
        "Visual health trends",
        "Health app integration",
        "AI health recommendations",
        "Comprehensive health dashboard",
      ];
    case "Community Support":
      return [
        "Connect with fitness enthusiasts",
        "Social feed and updates",
        "Fitness challenges",
        "Live workouts and discussions",
        "Community leaderboards",
      ];
    case "Real-time Sync":
      return [
        "Cross-device synchronization",
        "Mobile and wearable integration",
        "Instant data updates",
        "Cloud-based storage",
        "Automatic backup and sync",
      ];
    default:
      return [];
  }
};

export default FeatureDetails;
