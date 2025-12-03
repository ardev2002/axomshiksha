import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ClientSidebar from "./HomeSidebar";
import { getTrendingPosts } from "@/utils/helpers/getTrendingPosts";

export default async function HomeSidebarServer() {
  return (
    <div className="flex flex-col gap-6">
      <TrendingPosts />
      <ClientSidebar />
    </div>
  );
}

// Create a client component for the trending posts section
async function TrendingPosts() {
  const posts = await getTrendingPosts(5);
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          🔥 Trending Posts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.id}>
              <a
                href={`/${post.url}`}
                className="text-sm text-primary hover:underline"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}