"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

// Define the type for trending posts



export default function ClientSidebar() {
  const [email, setEmail] = useState("");

  const categories = [
    "Technology",
    "Programming",
    "Science",
    "Education",
    "Health",
    "Lifestyle",
  ];

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
          <div className="flex gap-2">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button>Subscribe</Button>
          </div>
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