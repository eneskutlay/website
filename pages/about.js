import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMeSections}>
        <h1>About Me</h1>
        <p>
          Hello 👋 my name is Enes, and I am interested in web development. I
          completed my computer programming associate degree in 2021. I am
          currently continuing my student career at{" "}
          <a
            href="https://42istanbul.com.tr/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ecole42.
          </a>
        </p>
      </div>
      <div className={styles.aboutMeSections}>
        <p>
          In addition to my education process, I continue to develop myself with
          open-source projects. I plan to continue my professional career as a
          front-end developer. Between April 2022 and May 2022, I completed my
          first work experience of two months at{" "}
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
          I love reviewing beautiful designs, taking notes, and writing code. If
          you want to contact me, feel free to send an e-mail to{" "}
          <a href="mailto:contact@eneskutlay.dev">contact@eneskutlay.dev</a>. I
          enjoy meeting and chatting with new people.
        </p>
      </div>
      <div className={styles.aboutMeSections}>
        <p>
          You can check out my <a href="#">CV</a> and my{" "}
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
  );
}
