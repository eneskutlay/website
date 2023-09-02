import React from "react";
import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  ogImageUrl?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, ogImageUrl }) => (
  <Head>
    <title>{title}</title>
    <link rel="shortcut icon" href="/favicon-32x32.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json"></link>
    <meta name="theme-color" content="#0B0B0B"></meta>
    <meta name="description" content={description} />
    <meta name="author" content={title} />
    <meta property="og:image" content={ogImageUrl} />
    <meta property="og:image:alt" content="Enes Kutlay" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="600" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImageUrl} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@enesevski" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
    />
  </Head>
);

export default Seo;
