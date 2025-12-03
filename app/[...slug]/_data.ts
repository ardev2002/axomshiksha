"use cache: remote";

import { supabaseStatic } from "@/utils/supabase/server";
import { s3Client } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import matter from "gray-matter";
import { getSignedUrlForDownload } from "@/utils/s3/action";

export async function loadPost(fullSlugPath: string) {
  const { data: post } = await supabaseStatic
    .from("posts")
    .select("*")
    .eq("url", fullSlugPath)
    .maybeSingle();

  if (!post) return null;

  const command = new GetObjectCommand({
    Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
    Key: post.content_key!,
  });

  const { Body } = await s3Client.send(command);
  const content = await Body?.transformToString();

  const { data, content: mdxContent } = matter(content!);

  const { signedUrl } = await getSignedUrlForDownload(
    data.thumbnail.split(
      `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/`
    )[1]
  );

  return { post, data, mdxContent, signedUrl };
}
