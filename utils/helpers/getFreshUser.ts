import "server-only";
import { cache } from "react";
import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/supabase-js";

/**
 * Get the current user by calling the Supabase auth API `auth.getUser()`
 * It doesn't depend on frontend user
 * @returns {User | null}
 */
export const getFreshUser = cache(async (): Promise<User | null> => {
  const sp = await createClient();
  const {
    data: { user },
    error,
  } = await sp.auth.getUser();
  if (error) return null;
  return user;
});
