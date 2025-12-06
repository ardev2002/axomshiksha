import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface TagPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  // Await the params and searchParams promises
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const currentPage = parseInt(resolvedSearchParams.page || "1");
  const tagName = decodeURIComponent(resolvedParams.slug);
  
  // Dummy data for demonstration
  const totalPages = 3;
  const posts = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Sample Post ${i + 1} about ${tagName}`,
    description: `This is a sample post about ${tagName}. This content is for demonstration purposes only.`,
    date: new Date().toISOString(),
    class: "10",
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted-foreground hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Posts tagged with <span className="text-primary">"{tagName}"</span>
        </h1>
        <p className="text-muted-foreground mt-2">
          Found {posts.length} {posts.length === 1 ? "post" : "posts"} with this tag
        </p>
      </div>

      {posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {posts.map((post) => (
              <div key={post.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Class {post.class}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                disabled={currentPage <= 1}
                asChild
              >
                {currentPage > 1 ? (
                  <Link href={`/t/${encodeURIComponent(resolvedParams.slug)}?page=${currentPage - 1}`}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Link>
                ) : (
                  <span>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </span>
                )}
              </Button>

              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>

              <Button
                variant="outline"
                disabled={currentPage >= totalPages}
                asChild
              >
                {currentPage < totalPages ? (
                  <Link href={`/t/${encodeURIComponent(resolvedParams.slug)}?page=${currentPage + 1}`}>
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <span>
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No posts found</h2>
          <p className="text-muted-foreground mb-4">
            There are no posts with the tag "{tagName}".
          </p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      )}
    </div>
  );
}