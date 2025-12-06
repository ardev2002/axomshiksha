import * as motion from "motion/react-client";
import { BookOpen, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";

export function FeaturesSection() {
    return (
        <section className="py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                Learning Resources
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                Comprehensive educational tools to support your learning journey
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/study-materials" className="block">
                    <motion.div
                        className="relative group border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-sky-500/10 p-3 rounded-lg w-fit mb-4">
                            <BookOpen className="h-6 w-6 text-sky-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:underline">Study Materials</h3>
                        <p className="text-muted-foreground line-clamp-3">
                            Well-structured notes and resources for all subjects, organized by class and topic.
                        </p>
                    </motion.div>
                </Link>

                <Link href="/practice" className="block">
                    <motion.div
                        className="relative group border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="bg-emerald-500/10 p-3 rounded-lg w-fit mb-4">
                            <GraduationCap className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:underline">Practice Exercises</h3>
                        <p className="text-muted-foreground line-clamp-3">
                            Reinforce your learning with topic-wise practice questions and quizzes.
                        </p>
                    </motion.div>
                </Link>

                <Link href="/daily-quiz" className="block">
                    <motion.div
                        className="relative group border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >

                        <div className="bg-amber-400/10 p-3 rounded-lg w-fit mb-4">
                            <Trophy className="h-6 w-6 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:underline">Daily Quizzes</h3>
                        <p className="text-muted-foreground line-clamp-3">
                            Challenge yourself with daily quizzes to keep your knowledge fresh.
                        </p>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}
