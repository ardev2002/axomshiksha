import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram } from "lucide-react";

// Define the type for trending posts

export default function ClientSidebar() {
  const categories = [
    "Technology",
    "Programming",
    "Science",
    "Education",
    "Health",
    "Lifestyle",
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
          <CardTitle className="text-lg font-semibold">📂 Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant="outline"
                size="sm"
                className="text-xs rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">📧 Newsletter</CardTitle>
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
          <CardTitle className="text-lg font-semibold">🤝 Follow Us</CardTitle>
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
