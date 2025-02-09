
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  BarChart3,
  Activity,
  AlertTriangle,
  MessageSquare,
  Dumbbell,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockPerformanceData = [
  { day: "Mon", performance: 65 },
  { day: "Tue", performance: 75 },
  { day: "Wed", performance: 70 },
  { day: "Thu", performance: 80 },
  { day: "Fri", performance: 85 },
  { day: "Sat", performance: 78 },
  { day: "Sun", performance: 90 },
];

const AIInsights = () => {
  const { toast } = useToast();

  const handleChatbotClick = () => {
    toast({
      title: "Coming Soon",
      description: "The AI chatbot feature is currently under development.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Insights</h1>
          <p className="text-gray-600">
            Personalized recommendations and analytics powered by AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-primary" />
                Today's Best Workout
              </CardTitle>
              <CardDescription>
                Personalized recommendation based on your history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Upper Body Focus</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Bench Press: 4 sets x 8-10 reps</li>
                    <li>• Shoulder Press: 3 sets x 12 reps</li>
                    <li>• Pull-ups: 3 sets to failure</li>
                    <li>• Tricep Extensions: 3 sets x 15 reps</li>
                  </ul>
                </div>
                <Button className="w-full">Start Workout</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Performance Trends
              </CardTitle>
              <CardDescription>
                Your workout performance over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="performance"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Adaptive Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Based on your recent activity, consider reducing workout intensity
                today to prevent overtraining.
              </p>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Injury Prevention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Remember to focus on proper form during deadlifts to protect your
                lower back.
              </p>
              <Button variant="outline" className="w-full">
                View Tips
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Chat with our AI trainer for personalized workout advice and tips.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleChatbotClick}
              >
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Progress Analytics
            </CardTitle>
            <CardDescription>
              Detailed breakdown of your fitness improvements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Most Improved</h4>
                <p className="text-sm text-gray-600">
                  Chest exercises: +15% strength increase
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">
                  85% workout completion rate
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Recovery</h4>
                <p className="text-sm text-gray-600">
                  Optimal rest periods between workouts
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIInsights;
