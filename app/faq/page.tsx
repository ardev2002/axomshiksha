"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import type { Variants } from "motion/react";
import { ChevronDown } from "lucide-react";

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

const content: Variants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1, transition: { duration: 0.3 } }
};


export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is GyanRexa?",
      answer: "GyanRexa is a platform designed to provide high-quality knowledge, insights, and educational content to learners of all levels."
    },
    {
      question: "Is GyanRexa free to use?",
      answer: "Yes, most of our content is free. Premium features may be added in the future."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach us anytime at contact@gyanrexa.com."
    },
    {
      question: "Will you add more categories or subjects?",
      answer: "Yes! We continuously expand our content library to cover more topics and subjects."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="show"
        variants={item}
        viewport={{ once: true, amount: 1 }}
      >
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="mb-10 text-muted-foreground max-w-2xl mx-auto">
          Find answers to the most common questions regarding our platform,
          features, and usage.
        </p>
      </motion.div>

      <motion.div 
        className="space-y-4"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 1 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-border rounded-lg overflow-hidden"
            variants={item}
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left cursor-pointer bg-card hover:bg-accent transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </button>
            
            <motion.div
              variants={content}
              initial="collapsed"
              animate={openIndex === index ? "expanded" : "collapsed"}
              className="overflow-hidden"
            >
              <div className="p-4 pt-2 text-muted-foreground">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}