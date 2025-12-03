"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center
                        bg-white text-gray-900
                        dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-6xl font-bold tracking-tight mb-3">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
        The page you are looking for doesn’t exist or may have been moved.
        Please check the URL or return to the homepage.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/">
          <Button className="font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800
                             dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors">
            Go Home
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="outline"
            className="font-medium rounded-lg border-gray-900 text-gray-900 hover:bg-gray-100
                       dark:border-white dark:text-white dark:hover:bg-gray-800 transition-colors"
          >
            Contact Support
          </Button>
        </Link>
      </div>
    </section>
  );
}
