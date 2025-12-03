import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tables } from "@/utils/supabase/types";
import PostMetaDate from "@/components/custom/PostMetaDate";
import { getSignedUrlForDownload } from "@/utils/s3/action";

export default async function PostCard({ post }: { post: Tables<"posts"> }) {
  const { signedUrl } = await getSignedUrlForDownload(
    post.thumbnail.split(
      `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/`
    )[1]
  );

  return (
    <div className="border border-border dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-background flex flex-col">
      
      {/* Thumbnail with AspectRatio */}
      {post.thumbnail && (
        <AspectRatio ratio={16 / 8} className="overflow-hidden">
          <Image
            src={signedUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
      )}

      {/* Content */}
      <div className="flex flex-col p-3 gap-2 flex-1">
        
        {/* Meta */}
        <div className="flex justify-between items-center text-[10px] text-muted-foreground">
          <span className="px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-700">
            Class {post.class}
          </span>
          <PostMetaDate date={post.created_at} />
        </div>

        {/* Title */}
        <Link href={`/${post.url}`}>
          <h3 className="text-sm font-semibold leading-tight line-clamp-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2 leading-snug">
          {post.desc}
        </p>

        {/* Read more */}
        <div className="mt-auto flex justify-end">
          <Link
            href={`/${post.url}`}
            className="text-[11px] text-primary hover:underline"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
