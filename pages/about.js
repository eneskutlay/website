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
            Hey there! I&apos;m Enes, a web developer who enjoys building simple
            and efficient websites using JavaScript, Next.js, and CSS. After
            completing my computer programming degree in 2021, I spent a year at{" "}
            <a
              href="https://42istanbul.com.tr/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ecole42
            </a>{" "}
            to refine my skills in software development and the C language. I
            also gained experience as an intern front-end developer at{" "}
            <a
              href="https://path.com.tr"
              target="_blank"
              rel="noopener noreferrer"
            >
              PATH
            </a>{" "}
            for 2 months.
          </p>
        </div>
        <div className={styles.aboutMeSections}>
          <p>
            I have a passion for creating elegant designs and writing clean
            code. If you want to get in touch with me, shoot me an email at{" "}
            <a href="mailto:hi@eneskutlay.dev">hi@eneskutlay.dev</a>. I&apos;m
            always happy to meet new people and talk tech.
          </p>
        </div>
        <div className={styles.aboutMeSections}>
          <p>
            My main goal is to continually improve and gain more work
            experience. If you&apos;re looking for a junior front-end developer,
            check out my{" "}
            <a
              href="https://read.cv/eneskutlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>{" "}
            and{" "}
            <a
              href="https://github.ecom/eneskutlay"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            profile for examples of my work.
          </p>
        </div>
      </div>
    </>
  );
}
