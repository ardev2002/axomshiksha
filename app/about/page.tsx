import * as motion from "motion/react-client";
import { BookOpen, Users, Lightbulb, Heart, Target, Award, Zap } from "lucide-react";
import type { Variants } from "motion/react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="show"
        variants={item}
        viewport={{ once: true, amount: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          About AxomShiksha
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          An educational platform providing study materials, notes, and learning resources for students in Assam.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="bg-card border border-violet-200/50 dark:border-violet-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          variants={item}
        >
          <motion.div variants={iconVariants} className="mb-3">
            <Target className="w-8 h-8 text-violet-600 dark:text-violet-400" />
          </motion.div>
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-muted-foreground">
            At AxomShiksha, we believe in empowering students with quality educational resources. Our mission is to create a platform where 
            learners, educators, and knowledge seekers can come together to share insights, explore learning materials, and inspire 
            one another through well-curated educational content.
          </p>
        </motion.div>

        <motion.div
          className="bg-card border border-violet-200/50 dark:border-violet-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          variants={item}
        >
          <motion.div variants={iconVariants} className="mb-3">
            <Lightbulb className="w-8 h-8 text-violet-600 dark:text-violet-400" />
          </motion.div>
          <h2 className="text-xl font-semibold mb-3">What We Offer</h2>
          <p className="text-muted-foreground">
            We provide a platform for educators to share study materials and for students to discover helpful 
            learning resources across various subjects. From class notes to practice materials, AxomShiksha hosts 
            diverse educational content tailored for Assam students.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-linear-to-br from-violet-50/50 via-white to-purple-50/50 dark:from-zinc-900 dark:via-zinc-950 dark:to-purple-900/20 border border-violet-200/50 dark:border-violet-800/50 rounded-2xl p-8 mb-12 shadow-sm"
        initial="hidden"
        whileInView="show"
        variants={item}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Why AxomShiksha?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            variants={item}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="bg-violet-100/50 dark:bg-violet-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              variants={iconVariants}
            >
              <Users className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </motion.div>
            <h3 className="font-medium mb-2">Educational Resources</h3>
            <p className="text-sm text-muted-foreground">
              Access a collection of study materials and learning resources curated for Assam students.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            variants={item}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="bg-violet-100/50 dark:bg-violet-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              variants={iconVariants}
            >
              <Award className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </motion.div>
            <h3 className="font-medium mb-2">Quality Content</h3>
            <p className="text-sm text-muted-foreground">
              Discover well-organized study materials and educational content created by experienced educators.
            </p>
          </motion.div>
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            variants={item}
            viewport={{ once: true, amount: 1 }}
          >
            <motion.div
              className="bg-violet-100/50 dark:bg-violet-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              variants={iconVariants}
            >
              <Heart className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </motion.div>
            <h3 className="font-medium mb-2">Community Focused</h3>
            <p className="text-sm text-muted-foreground">
              Join a growing community of students and educators supporting each other's learning journey.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="show"
        variants={item}
        viewport={{ once: true, amount: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">
          Join Our Learning Community
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Whether you're here to learn, share educational resources, or simply explore, we're excited to have you as part of 
          the AxomShiksha community. Start your learning journey today!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-violet-600 dark:bg-violet-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors flex items-center gap-2 shadow-sm">
            <Zap className="w-4 h-4" />
            Get Started
          </button>
          <button className="border border-violet-200/50 dark:border-violet-800/50 bg-background px-5 py-2 rounded-lg text-sm font-medium hover:bg-violet-50/50 dark:hover:bg-violet-900/30 transition-colors flex items-center gap-2 shadow-xs">
            <BookOpen className="w-4 h-4" />
            Explore Resources
          </button>
        </div>
      </motion.div>
    </div>
  );
}