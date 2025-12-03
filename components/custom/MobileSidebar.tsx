"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { NAVLINKS } from "@/utils/CONSTANT";
import Image from "next/image";

export default function MobileSidebar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="p-2 hover:cursor-pointer rounded-md hover:bg-accent transition"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-80 h-full border-l border-border/50
                         bg-background/95 backdrop-blur-xl
                         text-foreground flex flex-col justify-between
                         shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)]"
          >
            {/* HEADER */}
            <div className="border-b border-border/40 bg-background/95 px-6 py-4 flex items-center justify-between">
              <SheetTitle className="text-xl font-semibold tracking-tight">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="rounded-md"
                />
              </SheetTitle>

              <SheetClose asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="rounded-md p-2 hover:cursor-pointer hover:bg-accent transition"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </SheetClose>
            </div>

            {/* MAIN MENU */}
            <div className="flex-1 overflow-y-auto py-6">
              <div className="flex flex-col gap-2 px-4">
                {NAVLINKS.map(({ href, label, icon: Icon }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex group items-center gap-3 rounded-lg px-4 py-3 text-[15px] transition-all duration-150 ${
                        isActive
                          ? "bg-violet-500/10 text-violet-600 font-medium"
                          : "text-muted-foreground hover:text-violet-500 hover:bg-accent/50"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isActive
                            ? "text-violet-600"
                            : "group-hover:text-violet-500 text-muted-foreground"
                        }`}
                      />
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-border/50 bg-background/90 px-5 py-4 space-y-3">
            
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
