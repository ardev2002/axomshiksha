import "server-only";
import { createClient } from "@/utils/supabase/server";
import { formatTimeAgo } from "@/utils/helpers/formatTimeAgo";
import { cache } from "react";

interface RecentPost {
  id: number;
  title: string;
  date: string;
  url: string;
}

/**
 * Get recent published posts from the database
 * @param limit - The number of posts to return
 * @returns {RecentPost[]}
 */
export const getRecentPublishedPosts = cache(
  async (limit: number = 2): Promise<RecentPost[]> => {
    const sp = await createClient();
    
    const { data: posts, error } = await sp
      .from("posts")
      .select("id, title, created_at, url")
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      return [];
    }

    return posts.map((post) => ({
      id: post.id,
      title: post.title,
      date: formatTimeAgo(post.created_at),
      url: post.url,
    }));
  } 
);
