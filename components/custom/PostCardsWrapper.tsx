import { getPaginatedPosts } from "@/utils/post/get/action";
import PostCard from "./PostCard";
import PaginationControls from "./PaginationControls";
import { Suspense } from "react";
export default async function PostCardsWrapper() {
  const { posts, currentPage, totalPages } = await getPaginatedPosts({
    filters: { status: "published" },
  });

  return (
    <div>
      {posts.length == 0 ? (
        <p className="text-center text-muted-foreground mt-20">
          No posts found.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
      <Suspense fallback={null}>
        <PaginationControls currentPage={currentPage} totalPages={totalPages} />
      </Suspense>
    </div>
  );
}
