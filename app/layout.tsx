import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mufasa Studio — We Build Brands That Roar",
  description: "Premium creative agency in Lagos, Nigeria. Affordable web design, brand identity, UI/UX, and social media management for African businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
