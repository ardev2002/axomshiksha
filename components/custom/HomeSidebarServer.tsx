import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ClientSidebar from "./HomeSidebar";
import { getTrendingPosts } from "@/utils/helpers/getTrendingPosts";
import { Flame } from "lucide-react";

export default async function HomeSidebarServer() {
  return (
    <div className="flex flex-col gap-8">
      <TrendingPosts />
      <ClientSidebar />
    </div>
  );
}

async function TrendingPosts() {
  const posts = await getTrendingPosts(5);

  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2 font-bold">
          <Flame className="h-5 w-5 text-orange-500" /> Trending Posts
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <a
                href={`/${post.url}`}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
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
