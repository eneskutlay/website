import styles from "../styles/Home.module.css";
import Head from "next/head";
import { head } from "../lib/data";

export default function About() {
  return (
    <>
      <Head>
        <title>{head.aboutTitle}</title>
        <meta name="description" content={head.writeDesc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={head.aboutTitle} key="title" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app//${encodeURIComponent(
            head.aboutTitle
          )}.?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`}
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.aboutMeSections}>
          <h1>About Me</h1>
          <p>
            Hello 👋 my name is Enes, and I am interested in web development. I
            completed my computer programming associate degree in 2021. Then I
            studied at{" "}
            <a
              href="https://42istanbul.com.tr/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ecole42 for a year.
            </a>
          </p>
        </div>
        <div className={styles.aboutMeSections}>
          <p>
            After ending my education career, I completed my first work
            experience as an Intern Front-end developer at{" "}
            <a
              href="https://path.com.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              PATH.
            </a>{" "}
            Btw I am not currently working. I keep learning JavaScript, NextJS,
            and Digital design.
          </p>
        </div>
        <div className={styles.aboutMeSections}>
          <p>
            I love reviewing beautiful designs, taking notes, and writing code.
            If you want to contact me, feel free to send an e-mail to{" "}
            <a href="mailto:hi@eneskutlay.dev">hi@eneskutlay.dev</a>.
            I enjoy meeting and chatting with new people.
          </p>
        </div>
        <div className={styles.aboutMeSections}>
          <p>
            If you are hiring, you can check out my{" "}
            <a
              href="https://read.cv/eneskutlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>{" "}
            and my{" "}
            <a
              href="https://github.ecom/eneskutlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            profile.
          </p>
        </div>
      </div>
    </>
  );
}
