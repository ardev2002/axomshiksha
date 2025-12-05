import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tables } from "@/utils/supabase/types";
import PostMetaDate from "@/components/custom/PostMetaDate";
import { getSignedUrlForDownload } from "@/utils/s3/action";
import { Badge } from "../ui/badge";

export default async function PostCard({ post }: { post: Tables<"posts"> }) {
  const { signedUrl } = await getSignedUrlForDownload(
    post.thumbnail.split(
      `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/`
    )[1]
  );

  return (
    <Link href={`/${post.url}`} className="block h-full group">
      <div className="border border-border dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-background flex flex-col h-full">
        {post.thumbnail && (
          <AspectRatio ratio={16 / 9} className="overflow-hidden">
            <Image
              src={signedUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </AspectRatio>
        )}

        {/* Content */}
        <div className="flex flex-col p-3 gap-2 flex-1">
          {/* Meta */}
          <div className="flex justify-between items-center text-xs text-muted-foreground">
              <Badge variant={"outline"}>
                Class {post.class}
              </Badge>
            <PostMetaDate date={post.created_at} />
          </div>

          {/* Title */}
          <h3 className="font-semibold group-hover:underline leading-tight hover:text-primary transition-colors line-clamp-2 text-[17px]">
            {post.title}
          </h3>

          {/* Read more */}
          <div className="mt-auto flex justify-end">
            <span className="text-sm text-primary hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
