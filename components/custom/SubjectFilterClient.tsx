"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SUBJECTS } from "@/utils/CONSTANT";
import PostCardsOnSubject from "./PostCardsOnSubject";

export default function SubjectFilterClient() {
  const [activeSubject, setActiveSubject] = useState(Object.values(SUBJECTS)[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 200; // pixels per arrow click

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <>
      {/* Tab Scroll Wrapper */}
      <div className="flex items-center gap-2 py-3 w-full">

        {/* Left Arrow */}
        <button className="p-1 disabled:opacity-30" onClick={scrollPrev}>
          <ChevronLeft size={18} />
        </button>

        {/* CSS Grid Tabs */}
        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-max gap-3 overflow-hidden flex-1"
        >
          {Object.values(SUBJECTS).map((subject) => {
            const isActive = activeSubject === subject;

            return (
              <div key={subject} className="relative">
                <Badge
                  variant="outline"
                  className="cursor-pointer text-sm px-4 py-1.5 rounded-full whitespace-nowrap"
                  onClick={() => setActiveSubject(subject)}
                >
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </Badge>

                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-primary bottom-0 mx-2 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button className="p-1 disabled:opacity-30" onClick={scrollNext}>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Posts Section */}
      <PostCardsOnSubject subject={activeSubject} />
    </>
  );
}
