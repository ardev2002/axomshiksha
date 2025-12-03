import HomeSidebarServer from "@/components/custom/HomeSidebarServer";
import PostCardSkeleton from "@/components/custom/PostCardSkeleton";
import PostCardsWrapper from "@/components/custom/PostCardsWrapper";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function HomePage({ searchParams }: PageProps<"/">) {
  return (
    <>
      {/* Refined Hero Section with Gradient */}
      <section className="relative overflow-hidden flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10 rounded-2xl p-8 border border-border shadow-sm bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
        {/* Decorative Blur Circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-100 dark:bg-purple-900 rounded-full blur-3xl opacity-40" />

        {/* Left: Blog Introduction */}
        <div className="relative text-center lg:text-left space-y-3 max-w-lg z-10">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Insights. Ideas. Inspiration.
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Explore thoughtful articles, practical guides, and creative stories
            crafted by passionate writers and developers. Learn, grow, and stay
            inspired — one post at a time.
          </p>
          <div className="flex justify-center lg:justify-start gap-3 pt-2">
            <Button variant="default" size="sm">
              Explore Categories
            </Button>
            <Button variant="outline" size="sm">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Right: Search + Featured Section */}
        <div className="relative w-full lg:w-[45%] flex flex-col sm:flex-row lg:flex-col items-center sm:items-end lg:items-end gap-3 z-10">
          {/* Search Input */}
          <div className="w-full sm:w-[60%] lg:w-full">
            <Input
              type="search"
              placeholder="Search articles..."
              className="rounded-lg text-sm"
            />
          </div>

          {/* Featured / Quote Section */}
          <div className="flex items-center justify-center lg:justify-end gap-2 text-xs sm:text-sm text-muted-foreground text-center lg:text-right">
            <Badge variant="secondary" className="text-xs">
              Editor's Pick
            </Badge>
            <span>“Learn something new every day.”</span>
          </div>
        </div>
      </section>

      {/* Main Content: Posts + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* Left: Posts */}
        <div>
          <Suspense fallback={<PostCardSkeleton />}>
            <PostCardsWrapper
              pagePromise={searchParams.then((sp) => sp.page)}
            />
          </Suspense>
        </div>

        {/* Right: Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <HomeSidebarServer />
        </aside>
      </div>
    </>
  );
}