import * as React from "react";
import * as styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.main}>
      <p className={styles.mainInfo}>
        <span className={styles.nameSpan}>I'm Enes Kutlay</span>
        <span>, a software developer student at</span>
        <a className={styles.schoolSpan} href="https://42.fr/en/homepage/"> Ecole42  </a>
        <span>
          I'm mainly focused on learn  Front-End development and C programming.
        </span>
        <span>Usually share my projects and assignments as open source on</span>
        <a className={styles.socialSpan} href="https://github.com/eneskutlay" target="blank"> Github.</a>
      </p>
    </div>
  );
};

export default Hero;
