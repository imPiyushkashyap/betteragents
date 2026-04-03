import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "BetterAgent | Next-Gen AI Interface",
  description: "A minimalist, high-performance interface for advanced AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased")}
    >
      <body className="min-h-full flex flex-col selection:bg-primary/20">{children}</body>
    </html>
  );
}
