import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Folder,
  Mail,
  Users,
} from "lucide-react";
import Link from "next/link";

// Define the type for trending posts

export default function ClientSidebar() {
  const tags = [
    "tech",
    "programming",
    "science",
    "gadgets",
    "health",
    "lifestyle",
    "ai"
  ];

  const formAction = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    console.log(email);
  };

  return (
    <>
      {/* Categories */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Folder className="h-5 w-5 text-blue-500" /> Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 line-clamp-3">
            {tags.map((tag) => (
              <Button
                key={tag}
                asChild
                variant="outline"
                size="sm"
                className="text-xs hover:cursor-pointer rounded-full"
              >
                <Link href={`/t/${tag}`}>
                  #{tag}
                </Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Mail className="h-5 w-5 text-green-500" /> Newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            Stay updated with our latest articles.
          </p>
          <form action={formAction} className="flex gap-2">
            <Input placeholder="Enter your email" name="email" />
            <Button className="hover:cursor-pointer" type="submit" size="sm">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>

      <Separator />

      {/* Follow Us */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" /> Follow Us
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-5 w-5" />
          </a>
        </CardContent>
      </Card>
    </>
  );
}
