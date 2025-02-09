
import { Activity, Brain, ChartBar, Clock, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get personalized workout and nutrition recommendations based on your goals and progress.",
  },
  {
    icon: Activity,
    title: "Workout Tracking",
    description: "Log and monitor your exercises, sets, reps, and weights with ease.",
  },
  {
    icon: ChartBar,
    title: "Progress Analytics",
    description: "Visualize your fitness journey with detailed charts and metrics.",
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Track vital health metrics and see how they improve over time.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded individuals and share your fitness journey.",
  },
  {
    icon: Clock,
    title: "Real-time Sync",
    description: "Seamlessly sync your data across all your devices in real-time.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and features to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={`/feature/${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="block group"
            >
              <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 glass-card hover:-translate-y-1">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
