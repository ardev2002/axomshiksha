"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAVLINKS } from "@/utils/CONSTANT";
export default function DesktopNavLinks() {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden md:flex items-center gap-6">
        {NAVLINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive
                  ? "text-violet-600 font-medium"
                  : "text-muted-foreground hover:text-violet-500"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}