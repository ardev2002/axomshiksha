import "server-only";
import { createClient } from "@/utils/supabase/server";

interface TrendingPost {
  id: number;
  title: string;
  url: string;
  views: number;
  score: number;
}

export async function getTrendingPosts(limit: number = 5): Promise<TrendingPost[]> {
  const supabase = await createClient();

  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, url, views")
    .eq("status", "published")
    .order("views", { ascending: false })
    .limit(limit * 2);

  if (error) {
    console.error("Error fetching trending posts:", error);
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