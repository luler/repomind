import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RepoMind - AI Code Assistant",
  description: "Deep dive into any GitHub repository with AI-powered analysis. Chat with your code, understand complex logic, and find bugs instantly.",
  openGraph: {
    title: "RepoMind - AI Code Assistant",
    description: "Deep dive into any GitHub repository with AI-powered analysis.",
    url: "https://repomind-ai.vercel.app",
    siteName: "RepoMind",
    images: [
      {
        url: "/repomind.png",
        width: 1200,
        height: 630,
        alt: "RepoMind AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RepoMind - AI Code Assistant",
    description: "Deep dive into any GitHub repository with AI-powered analysis.",
    images: ["/repomind.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`} suppressHydrationWarning>
      <body
        className="antialiased font-sans"
      >
        {children}
      </body>
    </html>
  );
}
