"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Book, Library, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CLASSES, SUBJECTS } from "@/utils/CONSTANT";

export default function StudyMaterialsPage() {
  const [selectedClass, setSelectedClass] = React.useState<string>("");
  const [selectedSubject, setSelectedSubject] = React.useState<string>("");

  // Convert CLASSES constant to the format needed for Select component
  const classOptions = CLASSES.map(cls => ({
    value: cls.name.toLowerCase().replace(/\s+/g, "-"),
    label: cls.name
  }));

  // Convert SUBJECTS constant to the format needed for Select component
  const subjectOptions = Object.entries(SUBJECTS).map(([key, value]) => ({
    value: value,
    label: key
  }));

  // Sample materials data
  const materialsData = [
    {
      id: 1,
      title: "Algebra Basics",
      subject: "mathematics",
      class: "class-10",
      description: "Fundamental concepts of algebra for Class 10 students",
      documentType: "PDF",
      fileSize: "2.4 MB",
      downloads: 1240,
      icon: <Book className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 2,
      title: "Chemical Reactions",
      subject: "science",
      class: "class-10",
      description: "Detailed explanation of various chemical reactions",
      documentType: "PDF",
      fileSize: "3.1 MB",
      downloads: 980,
      icon: <FileText className="h-5 w-5 text-green-500" />,
    },
    {
      id: 3,
      title: "Assamese Literature",
      subject: "assamese",
      class: "class-12",
      description: "Important works in Assamese literature for higher secondary",
      documentType: "PDF",
      fileSize: "1.8 MB",
      downloads: 760,
      icon: <Library className="h-5 w-5 text-orange-500" />,
    },
  ];

  // Filter materials based on selections
  const filteredMaterials = materialsData.filter(material => {
    const classMatch = selectedClass ? material.class === selectedClass : true;
    const subjectMatch = selectedSubject ? material.subject === selectedSubject : true;
    return classMatch && subjectMatch;
  });

  // Reset subject when class changes
  const handleClassChange = (value: string) => {
    setSelectedClass(value);
    setSelectedSubject(""); // Reset subject selection
  };

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

      {/* Filters Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Select Class</label>
              <Select value={selectedClass} onValueChange={handleClassChange}>
                <SelectTrigger className="w-full hover:cursor-pointer">
                  <SelectValue placeholder="Choose a class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Classes</SelectLabel>
                    {classOptions.map((cls) => (
                      <SelectItem key={cls.value} value={cls.value}>
                        {cls.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Select Subject</label>
              <Select 
                value={selectedSubject} 
                onValueChange={setSelectedSubject}
                disabled={!selectedClass}
              >
                <SelectTrigger className="w-full hover:cursor-pointer">
                  <SelectValue placeholder={selectedClass ? "Choose a subject" : "Select class first"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Subjects</SelectLabel>
                    {subjectOptions.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full hover:cursor-pointer" size="lg">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Results Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            {selectedClass || selectedSubject ? "Available Materials" : "Popular Materials"}
          </h2>
          <p className="text-muted-foreground">
            {filteredMaterials.length} {filteredMaterials.length === 1 ? "document" : "documents"} found
          </p>
        </div>

        {filteredMaterials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {material.icon}
                        <div>
                          <CardTitle className="text-lg">{material.title}</CardTitle>
                          <CardDescription className="capitalize">
                            {material.documentType} • {material.fileSize}
                          </CardDescription>
                        </div>
                      </div>
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{material.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {material.downloads.toLocaleString()} downloads
                      </span>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <Book className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No materials found</h3>
            <p className="text-muted-foreground mb-4">
              We couldn't find any materials matching your selection. Try selecting different filters.
            </p>
            <Button variant="outline" onClick={() => { setSelectedClass(""); setSelectedSubject(""); }}>
              Clear Filters
            </Button>
          </Card>
        )}
      </motion.div>

      {/* Request Materials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
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