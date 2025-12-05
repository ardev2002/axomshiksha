import { Mail, Phone, MapPin } from "lucide-react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// -------- SERVER ACTION --------
async function action(formData: FormData) {
  "use server";
}

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      {/* Page Title */}
      <motion.div
        className="text-center mb-14"
        initial="hidden"
        whileInView="show"
        variants={item}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or feedback? We would be glad to assist you.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
      >
        {[
          {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            desc: "We are happy to help you anytime.",
            link: { label: "shikshaaxom@gmail.com", href: "mailto:shikshaaxom@gmail.com" },
          },
          {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            desc: "Reach out for quick support.",
            link: { label: "+91 9954765021", href: "tel:+919954765021" },
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            desc: "Our physical office location.",
            address: <>Axomshiksha Learning Center <br />Goreswar, Assam</>,
          },
        ].map((block, i) => (
          <motion.div
            key={i}
            variants={item}
            className="bg-card border border-purple-200/40 dark:border-purple-900/40 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Row: Icon + Title */}
            <div className="flex items-center justify-start gap-4 mb-4">
              <motion.div
                variants={iconVariants}
                className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
              >
                {block.icon}
              </motion.div>

              <h2 className="text-xl font-semibold tracking-tight">
                {block.title}
              </h2>
            </div>

            {/* Body */}
            <p className="text-muted-foreground text-sm mb-2">
              {block.desc}
            </p>

            {block.link && (
              <a
                href={block.link.href}
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                {block.link.label}
              </a>
            )}

            {block.address && (
              <p className="text-sm leading-relaxed">
                {block.address}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
