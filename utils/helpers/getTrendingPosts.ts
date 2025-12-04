import "server-only";
import { spBrowser } from "../supabase/client";

interface TrendingPost {
  id: number;
  title: string;
  url: string;
  views: number;
  score: number;
}

/**
 * Get trending published posts from the database
 * @param limit - The number of posts to return
 * @returns {TrendingPost[]}
 */
export async function getTrendingPosts(limit: number = 5): Promise<TrendingPost[]> {
  "use cache";
  const { data: posts, error } = await spBrowser()
    .from("posts")
    .select("id, title, url, views")
    .eq("status", "published")
    .order("views", { ascending: false })
    .limit(limit * 2);

  if (error) {
    return [];
  }

  const postsWithScore = posts
    .map(post => ({
      ...post,
      score: post.views
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return postsWithScore;
}