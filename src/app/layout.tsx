import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enes Kutlay",
  description: "Enes Kutlay's personal website",
  openGraph: {
    title: "Enes Kutlay",
    description: "Enes Kutlay's personal website",
    images: [
      {
        url: "https://raw.githubusercontent.com/eneskutlay/website/main/public/og.png",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`flex ${inter.className} bg-white dark:bg-neutral-950`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
