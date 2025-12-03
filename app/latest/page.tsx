import * as motion from "motion/react-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Eye, Heart } from "lucide-react";

export default function LatestPage() {
  const latestPosts = [
    {
      title: "Understanding Algebra Basics",
      excerpt: "A comprehensive guide to mastering fundamental algebraic concepts for beginners.",
      date: "May 15, 2023",
      readTime: "5 min read",
      views: "1.2k",
      likes: "42"
    },
    {
      title: "Assamese Literature Through the Ages",
      excerpt: "Exploring the rich history and evolution of Assamese literature from ancient to modern times.",
      date: "May 12, 2023",
      readTime: "8 min read",
      views: "850",
      likes: "36"
    },
    {
      title: "Effective Study Techniques for Board Exams",
      excerpt: "Proven strategies to maximize your preparation and performance in board examinations.",
      date: "May 10, 2023",
      readTime: "6 min read",
      views: "2.1k",
      likes: "87"
    },
    {
      title: "Introduction to Environmental Science",
      excerpt: "Key concepts and principles of environmental science explained in simple terms.",
      date: "May 8, 2023",
      readTime: "7 min read",
      views: "1.5k",
      likes: "53"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Latest Articles
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the newest educational content and resources
        </p>
      </motion.div>

      <div className="space-y-6">
        {latestPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes} likes</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Button>Read More</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-12"
      >
        <Button variant="outline" size="lg">Load More Articles</Button>
      </motion.div>
    </div>
  );
}