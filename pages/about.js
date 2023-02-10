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
            In addition to my education process, I continue to develop myself
            with open-source projects. I plan to continue my professional career
            as a front-end developer. Between April 2022 and May 2022, I
            completed my first work experience of two months at{" "}
            <a
              href="https://path.com.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              PATH
            </a>{" "}
            company as an intern front-end developer.
          </p>
        </div>
        <div className={styles.aboutMeSections}>
          <p>
            I love reviewing beautiful designs, taking notes, and writing code.
            If you want to contact me, feel free to send an e-mail to{" "}
            <a href="mailto:contact@eneskutlay.dev">contact@eneskutlay.dev</a>.
            I enjoy meeting and chatting with new people.
          </p>
        </div>
        <div className={styles.aboutMeSections}>
          <p>
            You can check out my <a href="https://drive.google.com/file/d/1pBdbcH13gSjvUzIFw7b42u4rZyQZNVGD/view?usp=sharing" download>CV</a> and my{" "}
            <a
              href="https://github.ecom/eneskutlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            profile if you are hiring.
          </p>
        </div>
      </div>
    </>
  );
}
