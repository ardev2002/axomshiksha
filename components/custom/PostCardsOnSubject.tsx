"use client";

import { useState, useEffect, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { getPostsBySubject } from "@/utils/post/get/action";
import { Database } from "@/utils/supabase/types";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getSignedUrlForDownload } from "@/utils/s3/action";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MotionButton } from "./Motion";

type PostRow = Database["public"]["Tables"]["posts"]["Row"];

function PostCardClient({ post }: { post: PostRow }) {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSignedUrl = async () => {
      try {
        setLoading(true);
        const key = post.thumbnail.split(
          `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/`
        )[1];

        if (key) {
          const { signedUrl } = await getSignedUrlForDownload(key);
          setSignedUrl(signedUrl);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchSignedUrl();
  }, [post.thumbnail]);

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="border border-border rounded-xl overflow-hidden shadow-sm bg-background flex flex-col h-full"
        >
          <AspectRatio ratio={16 / 8}>
            <Skeleton className="w-full h-full" />
          </AspectRatio>
          <div className="p-3 space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Link href={`/${post.url}`} className="block h-full">
            <div className="border border-border dark:border-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-background flex flex-col h-full">
              {post.thumbnail && signedUrl && (
                <AspectRatio ratio={16 / 8} className="overflow-hidden">
                  <Image
                    src={signedUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              )}

              <div className="flex flex-col p-3 gap-2 flex-1">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span className="px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-700">
                    Class {post.class}
                  </span>
                  <span>{formatDate(post.created_at)}</span>
                </div>

                <h3 className="text-base font-semibold leading-tight hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="mt-auto flex justify-end">
                  <span className="text-xs text-primary hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </>
  );
}

export default function PostCardsOnSubject({
  subject,
}: {
  subject: Database["public"]["Enums"]["Subject"];
}) {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setPage(1);
  }, [subject]);

  useEffect(() => {
    startTransition(() => {
      getPostsBySubject(subject, page).then((res) => setPosts(res.posts));
    });
  }, [subject, page]);

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => Math.max(1, p - 1));

  return (
    <LayoutGroup>
      <div className="mt-6 space-y-6">
        {/* Cards / Empty State */}
        <div className="mb-4">
          <AnimatePresence mode="wait">
            {posts.length === 0 ? (
              <motion.p
                key={`empty-${subject}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="text-center text-muted-foreground"
              >
                No posts found.
              </motion.p>
            ) : (
              <motion.div
                key={`${subject}-${page}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, delay: index * 0.1 }}
                  >
                    <PostCardClient post={post} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {posts.length > 0 && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex justify-center gap-2"
          >
            <MotionButton
              variant="outline"
              size="icon-sm"
              onClick={prevPage}
              disabled={page === 1 || isPending}
              className="rounded-full hover:cursor-pointer"
            >
              <ChevronLeft />
            </MotionButton>
            <MotionButton
              variant="outline"
              size="icon-sm"
              onClick={nextPage}
              disabled={isPending}
              className="rounded-full hover:cursor-pointer"
            >
              <ChevronRight />
            </MotionButton>
          </motion.div>
        )}
      </div>
    </LayoutGroup>
  );
}
