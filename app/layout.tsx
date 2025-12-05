import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/custom/Header";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import { Toaster } from "@/components/custom/Toaster";
import Footer from "@/components/custom/Footer";
import CookieConsent from "@/components/custom/CookieConsent";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata: Metadata = {
  title: "AxomShiksha - Study Materials, Notes & Learning Resources",
  description:
    "Study materials, notes, and helpful learning resources for students in Assam. AxomShiksha empowers learners with simple, clear, and useful educational content.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1741779077297678"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body className={`antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-center" />
        </ThemeProvider>
        <CookieConsent />
        <GoogleAnalytics gaId="G-D5TGEJCED7"/>
      </body>
    </html>
  );
}
