import "../styles/globals.css";
import "../styles/normalize.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Enes Kutlay</title>
				<meta name="theme-color" content="#FFFFFF" />
				<meta name="description" content="Enes Kutlay personal website" />
				<meta name="author" content="Enes Kutlay" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					property="og:title"
					content="Enes Kutlay - Front-end Developer Website"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="/og.png"
				/>
				<meta property="og:url" content="https://eneskutlay.dev/" />
				<link rel="icon" href="/me.ico" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
