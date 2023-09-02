import "./globals.css";
import { Inter } from "next/font/google";
import Seo from "@/components/Seo";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enes Kutlay",
  description: "Enes Kutlay personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Seo {...metadata} />
      <body className={`flex ${inter.className} bg-white dark:bg-neutral-950`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
