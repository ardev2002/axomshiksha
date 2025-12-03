import { Suspense } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Image from "next/image";

import { useMDXComponents } from "@/mdx-components";
import PostMetaDate from "@/components/custom/PostMetaDate";
import ViewTracker from "@/components/custom/ViewTracker";
import { loadPost } from "./_data";

export default function PostPage({ params }: PageProps<"/[...slug]">) {
  const slugPromise = params.then((p) => p.slug.join("/"));

  return (
    <Suspense
      fallback={
        <div className="py-10 text-center text-sm text-muted-foreground">
          Loading post...
        </div>
      }
    >
      <PostPageInner slugPromise={slugPromise} />
    </Suspense>
  );
}

async function PostPageInner({
  slugPromise,
}: {
  slugPromise: Promise<string>;
}) {
  const fullSlugPath = await slugPromise;

  const result = await loadPost(fullSlugPath);
  if (!result) return notFound();

  const { post, data, mdxContent, signedUrl } = result;

  return (
    <article className="mx-auto space-y-4">
      <ViewTracker postId={post.id} />

      <header className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {data.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <PostMetaDate date={post.created_at} />
          {data.reading_time && <span>{data.reading_time} min read</span>}
          {data.class && (
            <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
              Class {data.class}
            </span>
          )}
        </div>

        <div className="relative aspect-21/9 w-full rounded-lg overflow-hidden">
          <Image
            src={signedUrl}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        {data.description && (
          <div className="border-l-4 border-primary/50 pl-4 py-2 rounded-l-lg">
            <p className="text-muted-foreground italic">{data.description}</p>
          </div>
        )}
      </header>

      <div className="prose prose-gray dark:prose-invert max-w-none relative">
        <MDXRemote
          source={mdxContent}
          components={useMDXComponents()}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark",
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
