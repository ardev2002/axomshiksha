import { Mail, Phone, MapPin, Send, User, Clock } from "lucide-react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
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

  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");
}

export default async function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="show"
        variants={item}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or feedback? We would be glad to assist you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE CONTACT BLOCKS */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Email */}
          <motion.div
            className="bg-card border border-violet-200/50 dark:border-violet-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            variants={item}
          >
            <motion.div variants={iconVariants} className="mb-3">
              <Mail className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-2">Email Us</h2>
            <p className="text-muted-foreground mb-3">For any general help</p>
            <a
              href="mailto:contact@gyanrexa.com"
              className="text-violet-600 dark:text-violet-400 hover:underline"
            >
              contact@gyanrexa.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="bg-card border border-violet-200/50 dark:border-violet-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            variants={item}
          >
            <motion.div variants={iconVariants} className="mb-3">
              <Phone className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p className="text-muted-foreground mb-3">Quick assistance</p>
            <a
              href="tel:+11234567890"
              className="text-violet-600 dark:text-violet-400 hover:underline"
            >
              +1 (123) 456-7890
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            className="bg-card border border-violet-200/50 dark:border-violet-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            variants={item}
          >
            <motion.div variants={iconVariants} className="mb-3">
              <MapPin className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            </motion.div>
            <h2 className="text-xl font-semibold mb-2">Visit Us</h2>
            <p className="text-muted-foreground">Our office</p>
            <p className="mt-2">
              GyanRexa BlogHouse
              <br />
              Goreswarer, Assam
              <br />
              India
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          className="bg-card border border-violet-200/50 dark:border-violet-800/50 rounded-2xl p-6 shadow-sm"
          initial="hidden"
          whileInView="show"
          variants={item}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6 justify-center">
            Send us a Message
          </h2>

          {/* Server action form */}
          <form action={action} className="space-y-5">
            {/* Name — InputGroup with inline icon addon */}
            <motion.div variants={item}>
              <Label className="block text-sm font-medium mb-2">Name</Label>

              <InputGroup>
                <InputGroupInput
                  name="name"
                  placeholder="Your name"
                  aria-label="Name"
                />
                <InputGroupAddon>
                  <User className="h-4 w-4 text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </motion.div>

            {/* Email — InputGroup with inline icon addon */}
            <motion.div variants={item}>
              <Label className="block text-sm font-medium mb-2">Email</Label>

              <InputGroup>
                <InputGroupInput
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  aria-label="Email"
                />
                <InputGroupAddon>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </motion.div>

            {/* Message — InputGroupTextarea with block-end addon (send button) */}
            <motion.div variants={item}>
              <Label className="block text-sm font-medium mb-2">Message</Label>

              <InputGroup>
                <InputGroupTextarea
                  name="message"
                  placeholder="How may we help you?"
                  rows={5}
                  aria-label="Message"
                />
              </InputGroup>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={item}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="w-full hover:cursor-pointer bg-violet-600 dark:bg-violet-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </motion.div>
          </form>

          <motion.div
            variants={item}
            className="mt-6 pt-6 border-t border-border flex items-center text-sm text-muted-foreground"
          >
            <Clock className="w-4 h-4 mr-2" />
            We typically respond within 24 hours
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
