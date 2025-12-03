"use server";
import { Tables } from "@/utils/supabase/types";
import { spBrowser } from "@/utils/supabase/client";
import { cacheTag } from "next/cache";


interface GetPaginatedPostsParams {
  page?: number;
  limit?: number;
  sortOrder?: "ascending" | "descending";
  search?: string;
  filters?: Partial<Omit<Tables<"posts">, "id" | "created_at" | "thumbnail">>;
}

export interface GetPaginatedPostsResult {
  posts: Tables<"posts">[] | [];
  totalPages: number;
  currentPage: number;
}

export async function getPaginatedPosts({
  page = 1,
  limit = 5,
  sortOrder = "descending",
  search = "",
  filters,
}: GetPaginatedPostsParams): Promise<GetPaginatedPostsResult> {
  "use cache";
  cacheTag("posts")
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  let query = spBrowser()
    .from("posts")
    .select("*", { count: "exact" });

  if (filters?.status) query = query.eq("status", filters.status);

  if (filters) {
    for (const [column, value] of Object.entries(filters)) {
      if (
        value !== undefined &&
        value !== "" &&
        value !== null &&
        column !== "created_at" &&
        column !== "id" &&
        column !== "thumbnail"
      ) {
        query = query.eq(column, value);
      }
    }
  }

  if (search.trim() !== "") {
    query = query.textSearch("title", search.trim(), {
      type: "websearch",
      config: "english",
    });
  }

  query = query
    .order("created_at", { ascending: sortOrder === "ascending" })
    .range(start, end);

  const { data, error, count } = await query;
  if (error) {
    return {
      posts: [],
      totalPages: 1,
      currentPage: page,
    };
  }

  const totalPages = Math.ceil((count ?? 0) / limit) || 1;

  return {
    posts: data || [],
    totalPages,
    currentPage: page,
  };
}
