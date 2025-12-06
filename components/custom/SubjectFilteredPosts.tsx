"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SUBJECTS } from "@/utils/CONSTANT";
import PostCardsOnSubject from "./PostCardsOnSubject";
import { Database } from "@/utils/supabase/types";
import { Button } from "../ui/button";
export default function SubjectFilteredPosts({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSubject, setActiveSubject] = useState<
    Database["public"]["Enums"]["Subject"] | null
  >(null);
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
        {/* Left Arrow - hidden on mobile */}
        <Button
          size={"icon-sm"}
          variant={"ghost"}
          type="button"
          className="p-1 disabled:opacity-30 hover:cursor-pointer hidden sm:block"
          onClick={scrollPrev}
        >
          <ChevronLeft size={18} />
        </Button>

        {/* CSS Grid Tabs */}
        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto flex-1 scrollbar-hide touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {Object.values(SUBJECTS).map((subject) => {
            const isActive = activeSubject === subject;

            return (
              <div key={subject} className="relative">
                <Badge
                  variant="outline"
                  className="cursor-pointer text-sm px-4 py-1.5 rounded-full whitespace-nowrap"
                  onClick={() =>
                    setActiveSubject(
                      subject as Database["public"]["Enums"]["Subject"]
                    )
                  }
                >
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </Badge>

                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-violet-500 bottom-0 mx-2 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Arrow - hidden on mobile */}
        <Button
          variant={"ghost"}
          size={"icon-sm"}
          type="button"
          className="p-1 disabled:opacity-30 hover:cursor-pointer hidden sm:block"
          onClick={scrollNext}
        >
          <ChevronRight size={18} />
        </Button>
      </div>

      {/* Show Default PostsWrapper only when no subject selected */}
      {!activeSubject ? (
        children
      ) : (
        <PostCardsOnSubject subject={activeSubject} />
      )}
    </>
  );
}
