import "./globals.css";
import { Inter } from "next/font/google";
import Seo from "@/components/Seo";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enes Kutlay",
  description: "Enes Kutlay's personal website",
  ogImageUrl:
    "https://raw.githubusercontent.com/eneskutlay/website/main/public/og.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Seo {...metadata} />
      <SpeedInsights />
      <body className={`flex ${inter.className} bg-white dark:bg-neutral-950`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
