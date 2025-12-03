import "server-only";
import { createClient } from "@/utils/supabase/server";
import { getSession } from "./getSession";

interface EndUserPostStats {
    totalViews: number;
    totalLikes: number;
}

export async function getEndUserPostStats(): Promise<EndUserPostStats | null> {
    const sp = await createClient();
    const session = await getSession();
    
    if (!session?.user) return null;
    
    const userId = session.user.id;
    
    if (!userId) return null;

    // Get all posts liked by the user
    const { data: likedPosts, error: likedPostsError } = await sp
        .from("post_likes")
        .select("post_id")
        .eq("user_id", userId);

    if (likedPostsError) {
        console.error("Error fetching liked posts:", likedPostsError);
        return null;
    }

    // Get view count for all posts viewed by the user
    // Note: We'll need to implement a views tracking table for this
    // For now, we'll return zeros for views since it's not implemented yet
    const totalViews = 0;
    
    // Count total likes (number of posts the user has liked)
    const totalLikes = likedPosts.length;
    

    return {
        totalViews,
        totalLikes,
    };
}