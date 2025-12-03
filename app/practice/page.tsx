import * as motion from "motion/react-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Clock, Trophy } from "lucide-react";

export default function PracticePage() {
  const practiceAreas = [
    {
      title: "Mathematics",
      description: "Practice problems and exercises to strengthen your math skills",
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      difficulty: "Beginner to Advanced"
    },
    {
      title: "Science",
      description: "Interactive science experiments and quizzes",
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      difficulty: "Basic to Intermediate"
    },
    {
      title: "Language Arts",
      description: "Reading comprehension and grammar exercises",
      icon: <Trophy className="h-8 w-8 text-purple-500" />,
      difficulty: "All Levels"
    },
    {
      title: "Social Studies",
      description: "History and geography practice tests",
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      difficulty: "Beginner to Expert"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Practice & Exercises
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sharpen your skills with interactive practice sessions tailored for Assam students
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {practiceAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {area.icon}
                  <div>
                    <CardTitle>{area.title}</CardTitle>
                    <CardDescription>{area.difficulty}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <Button variant="outline">Start Practicing</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-card border rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Track Your Progress</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Monitor your improvement with detailed analytics and personalized recommendations
        </p>
        <Button size="lg">View Dashboard</Button>
      </motion.div>
    </div>
  );
}