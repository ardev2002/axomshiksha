import * as motion from "motion/react-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Book, Library } from "lucide-react";

export default function StudyMaterialsPage() {
  const materialCategories = [
    {
      title: "Class 10 Notes",
      description: "Comprehensive notes covering all subjects for Class 10 students",
      icon: <Book className="h-8 w-8 text-blue-500" />,
      count: "45 documents"
    },
    {
      title: "Class 12 Resources",
      description: "Study guides, sample papers, and revision materials for Class 12",
      icon: <Library className="h-8 w-8 text-green-500" />,
      count: "68 documents"
    },
    {
      title: "Competitive Exams",
      description: "Materials for APSC, SSC and other state-level examinations",
      icon: <FileText className="h-8 w-8 text-purple-500" />,
      count: "32 documents"
    },
    {
      title: "Assamese Literature",
      description: "Special collection of Assamese language and literature resources",
      icon: <Download className="h-8 w-8 text-orange-500" />,
      count: "27 documents"
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
          Study Materials
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Download high-quality study materials prepared specifically for Assam students
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {materialCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {category.icon}
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.count}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline">Browse Materials</Button>
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
        <h2 className="text-2xl font-semibold mb-4">Request Specific Materials</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Can't find what you're looking for? Request specific study materials and we'll prepare them for you.
        </p>
        <Button size="lg">Submit Request</Button>
      </motion.div>
    </div>
  );
}