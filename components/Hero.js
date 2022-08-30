import styles from "./Component.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>👋🏼 Hey, I'm Enes</h1>
      <span className={styles.heroDetails}>
        B. 2000, Bursa, Turkey. I am a software developer, javascript and
        front-end techs learner. Currently living in Istanbul,
        Turkey and studying at Ecole42.
      </span>
    </div>
  );
}
