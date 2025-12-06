import * as motion from "motion/react-client";
import { getPaginatedPosts } from "@/utils/post/get/action";
import PostCard from "./PostCard";
export default async function DefaultPostsWrapper() {
  const { posts } = await getPaginatedPosts({
    filters: { status: "published" },
  });

  return (
    <div>
      {posts.length == 0 ? (
        <p className="text-center text-muted-foreground mt-20">
          No posts found.
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
