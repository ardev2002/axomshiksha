import { getVisitorIP, hashIP } from "@/utils/helpers/getVisitorIP";
import { registerUniqueView } from "@/utils/helpers/registerUniqueView";
import { createClient } from "@/utils/supabase/server";

export default async function ViewTracker({
  postId
}: {
  postId: number
}) {
  const ip = await getVisitorIP();
  const ipHash = hashIP(ip);

  const isUnique = await registerUniqueView(String(postId), ipHash);

  if (isUnique) {
    const supabase = await createClient();
    await supabase.rpc("increment_views", { post_id: postId });
  }

  return null;
}
