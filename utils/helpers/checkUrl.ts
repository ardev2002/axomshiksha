import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/utils/supabase/types";
import { blogUrlSchema } from "@/utils/zod/schema";
import { PostgrestError } from "@supabase/supabase-js";
import * as z from "zod";

export interface CheckUrl {
  isAvailable: boolean;
  successMsg?: string;
  errMsg?: string;
  draftPost?: Pick<Tables<"posts">, "url" | "title" | "category" | "authorId" | "status" | "thumbnail">;
}
export async function checkUrlAvailability(
  blogUrl: string,
): Promise<CheckUrl> {
  try {
    const url = blogUrlSchema.parse(blogUrl);
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("posts")
      .select("url, title, category, authorId, status, thumbnail")
      .eq("url", url)
      .maybeSingle();

    if (error) throw error;
    if (!data) return { isAvailable: true, successMsg: "URL is available" };
    
    // If a draft post exists with this URL, return it
    if (data.status === "draft") {
      return { 
        isAvailable: true, 
        successMsg: "URL is available",
        draftPost: data
      };
    }
    
    // If a published post exists with this URL, it's not available
    return { isAvailable: false, errMsg: "This URL already exists" };
  } catch (error) {
    if (error instanceof z.ZodError)
      return { errMsg: error.issues[0].message, isAvailable: false };
    if (error instanceof PostgrestError)
      return { errMsg: error.message, isAvailable: false };
    return { errMsg: "Unexpected error. Try again.", isAvailable: false };
  }
}
