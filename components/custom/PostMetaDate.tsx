"use client";

export default function PostMetaDate({ date }: { date: string }) {

    const d = new Date(date);
  
      const time = d.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })

  // Use suppressHydrationWarning to handle potential mismatches
  return <span suppressHydrationWarning>{time}</span>;
}