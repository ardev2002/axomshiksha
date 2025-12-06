import HomeSidebarServer from "@/components/custom/HomeSidebarServer";
import SubjectFilteredPosts from "@/components/custom/SubjectFilteredPosts";
import DefaultPostsWrapper from "@/components/custom/DefaultPostsWrapper";
import * as motion from "motion/react-client";
import { BookOpen, Users, Lightbulb, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeaturesSection } from "@/components/custom/FeaturesSection";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-xl p-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Educational Resources</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
          Study materials, notes, and learning resources for students across all classes and subjects.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-6">
        <div className="min-w-0">
          <SubjectFilteredPosts>
            <DefaultPostsWrapper />
          </SubjectFilteredPosts>
          <FeaturesSection />
          <DailyQuizHero />
        </div>
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <HomeSidebarServer />
        </aside>
        <WhyChooseUs />
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-8 bg-accent/50 rounded-2xl p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Why Students Trust Us</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
        Quality educational resources tailored for students in Assam
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex gap-4">
          <div className="mt-1">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Simplified Learning</h3>
            <p className="text-muted-foreground text-sm">
              Complex concepts broken down into easy-to-understand explanations with examples.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1">
            <Star className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Quality Content</h3>
            <p className="text-muted-foreground text-sm">
              Curated study materials created by experienced educators and subject matter experts.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1">
            <Users className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Community Support</h3>
            <p className="text-muted-foreground text-sm">
              Join a growing community of learners and educators sharing knowledge and insights.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mt-1">
            <BookOpen className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">All Subjects Covered</h3>
            <p className="text-muted-foreground text-sm">
              Comprehensive resources for all major subjects from Class 1 to Class 12 and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function DailyQuizHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10 rounded-2xl text-center shadow-sm"
    >
      <motion.div
        initial={{ scale: 0.85 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="mx-auto py-6 rounded-xl border border-accent"
      >
        <div className="flex justify-center mb-4">
          <Sparkles className="h-7 w-7 text-purple-600" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold">
          Challenge Yourself with Daily Educational Quizzes
        </h2>

        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          Practice important concepts every day and strengthen your knowledge
          through quick and engaging quizzes. Improve gradually and track your
          learning journey.
        </p>

        <motion.div
          className="mt-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <Link href="/daily-quiz">
            <Button
              size="lg"
              className="rounded-full hover:cursor-pointer px-8"
            >
              Start Today's Quiz
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
