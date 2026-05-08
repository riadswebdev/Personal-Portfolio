import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "react-hot-toast";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import ThemeEvolution from "@/components/ThemeEvolution";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Riad Shekh | Frontend Web Developer",
  description: "Frontend Web Developer skilled in React, Next.js, and Tailwind CSS. Building responsive, modern web applications.",
  openGraph: {
    title: "Md Riad Shekh | Frontend Web Developer",
    description: "Frontend Web Developer skilled in React, Next.js, and Tailwind CSS.",
    url: "https://djriad157764-creator.github.io",
    siteName: "Md Riad Shekh Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/5X4sD47X/riad.png",
        width: 400,
        height: 400,
        alt: "Md Riad Shekh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Riad Shekh | Frontend Web Developer",
    description: "Frontend Web Developer skilled in React, Next.js, and Tailwind CSS.",
    creator: "@md32316",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#e2e8f0",
              border: "1px solid rgba(0,240,255,0.2)",
              borderRadius: "12px",
              fontSize: "0.875rem",
            },
            success: { iconTheme: { primary: "#00f0ff", secondary: "#0f172a" } },
            error:   { iconTheme: { primary: "#f87171", secondary: "#0f172a" } },
          }}
        />
        <BackToTop />
        <ThemeEvolution />
      </body>
    </html>
  );
}
