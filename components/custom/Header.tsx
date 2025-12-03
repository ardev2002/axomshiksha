import Image from "next/image";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";
import DesktopNavLinks from "./DesktopNavLinks";
import { Menu } from "lucide-react";
import { Suspense } from "react";
import { NAVLINKS } from "@/utils/CONSTANT";
import NavSearchModel from "./NavSearchModel";

export default async function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60 transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AxomShiksha"
            width={36}
            height={36}
            className="rounded-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <Suspense fallback={<DesktopNavLinksSkeleton />}>
          <DesktopNavLinks />
        </Suspense>

        {/* Search and Mobile Menu Icons - Visible on all devices */}
        <div className="flex items-center gap-2">
          <NavSearchModel />
          <Suspense fallback={<MobileSidebarSkeleton />}>
            <MobileSidebar />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}

function MobileSidebarSkeleton() {
  return (
    <div className="md:hidden">
      <button
        type="button"
        disabled
        className="p-2 rounded-md hover:bg-accent transition"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </button>
    </div>
  );
}

function DesktopNavLinksSkeleton() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {NAVLINKS.map((link) => (
        <span
          key={link.href}
          className="text-muted-foreground transition-colors"
        >
          {link.label}
        </span>
      ))}
    </div>
  );
}