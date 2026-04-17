import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

// Font configurations
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair', weight: ['400', '700', '900'] });

// SEO metadata
export const metadata: Metadata = {
  title: "CTC Club - Learn Tech Skills, Build Real Projects",
  description: "The ultimate learning platform for university students. Access structured courses, earn certificates, build portfolio projects, and join a thriving tech community.",
  keywords: ["learning platform", "tech education", "university students", "online courses", "certificates"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
