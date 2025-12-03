import * as motion from "motion/react-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function ClassesPage() {
  const classLevels = [
    {
      title: "Primary Classes (1-5)",
      description: "Foundational learning resources for young students",
      icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
      subjects: ["Mathematics", "English", "Assamese", "General Science"]
    },
    {
      title: "Middle School (6-8)",
      description: "Building critical thinking and analytical skills",
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      subjects: ["Mathematics", "Science", "Social Science", "English", "Assamese"]
    },
    {
      title: "High School (9-10)",
      description: "Preparing for board examinations with comprehensive materials",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      subjects: ["Mathematics", "Science", "Social Science", "English", "Assamese", "Computer"]
    },
    {
      title: "Higher Secondary (11-12)",
      description: "Advanced learning for career-focused streams",
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      subjects: ["Science Stream", "Arts Stream", "Commerce Stream"]
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
          Class-wise Resources
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Educational materials organized by class levels for Assam students
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {classLevels.map((level, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {level.icon}
                  <div>
                    <CardTitle>{level.title}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Subjects Covered:</h3>
                  <div className="flex flex-wrap gap-2">
                    {level.subjects.map((subject, subjIndex) => (
                      <span 
                        key={subjIndex}
                        className="text-xs bg-secondary px-2 py-1 rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline">Explore Resources</Button>
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
        <h2 className="text-2xl font-semibold mb-4">Need Help Finding Resources?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our academic advisors can help you find the perfect learning materials for your class and subjects.
        </p>
        <Button size="lg">Contact Academic Advisor</Button>
      </motion.div>
    </div>
  );
}