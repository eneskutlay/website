import "../styles/globals.css";
import "../styles/normalize.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Enes Kutlay - Personal Website</title>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="description" content="I am interested in web development and specifically front-end development." />
        <meta name="author" content="Enes Kutlay" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="all" />
        <meta name="publisher" content="Enes Kutlay" />
        <meta property = "og: type" content = "website" />
        <meta property = "og: title" content = " Enes Kutlay - Personal Website" />
        <meta property = "og: description" content = "Hi 👋 I am Enes. I am interested in web development and specifically front-end development." />
        <meta property = "og: image" content = "/og.png" />
        <meta property = "og: url" content = "https://eneskutlay.dev/" />
        <meta property = "og: site_name" content = "Enes Kutlay" />
        <link rel="icon" href="/me.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
