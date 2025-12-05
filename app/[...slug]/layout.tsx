import { Metadata } from "next";
import { loadPost } from "./_data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }>} ): Promise<Metadata> {
  const slugPromise = params.then((p) => p.slug.join("/"));
  const url = await slugPromise;
  const post = await loadPost(url);
  if (!post) {
    return {
      title: "404 | Page not found",
    };
  }
  return {
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      images: [{
        url: post.signedUrl,
        width: 1200,
        height: 600,
        alt: post.data.title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.data.title,
      description: post.data.description,
      images: [{
        url: post.signedUrl,
        width: 1200,
        height: 600,
        alt: post.data.title,
      }],
    },
  }
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
