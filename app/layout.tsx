import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Harsh Rana | Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer, Cybersecurity Enthusiast, and AI/LLM Engineer based in Chennai, India.",
  keywords: ["Harsh Rana", "Full Stack Developer", "React", "Next.js", "AI Developer", "Cybersecurity", "Chennai"],
  authors: [{ name: "Harsh Rana" }],
  openGraph: {
    type: "website",
    title: "Harsh Rana | Full Stack Developer & AI Engineer",
    description: "Full Stack Developer, Cybersecurity Enthusiast, and AI/LLM Engineer based in Chennai, India.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",    
    title: "Harsh Rana | Full Stack Developer & AI Engineer",
    creator: "@hars_ars33",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030712] text-[#e8f0fe] antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0a1628",
              color: "#e8f0fe",
              border: "1px solid rgba(0,229,255,0.2)",
            },
          }}
        />
      </body>
    </html>
  );
}
