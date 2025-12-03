import { getPaginatedPosts } from "@/utils/post/get/action";
import PostCard from "./PostCard";
import PaginationControls from "./PaginationControls";
export default async function PostCardsWrapper({
  pagePromise,
}: {
  pagePromise: Promise<string | string[] | undefined>;
}) {
  const page = Number(await pagePromise) || 1;
  const { posts, currentPage, totalPages } = await getPaginatedPosts({
    page,
    filters: { status: "published" },
  });
  
  return (
    <>
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
      <PaginationControls currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}