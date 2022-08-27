import * as React from "react";
import * as styles from "./Hero.module.css";
import { useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        userName
        student
        school
        focus
        openSource
      }
    }
  }
`)
  return (
    <div className={styles.main}>
      <p className={styles.mainInfo}>
        <span className={styles.nameSpan}>{data.site.siteMetadata.userName}</span>
        <span>{data.site.siteMetadata.student}</span>
        <a className={styles.schoolSpan} href="https://42.fr/en/homepage/">{data.site.siteMetadata.school}</a>
        <span>{data.site.siteMetadata.focus}</span>
        <span>{data.site.siteMetadata.openSource}</span>
        <a
          className={styles.socialSpan}
          href="https://github.com/eneskutlay"
          target="blank"
        >
          Github.
        </a>
      </p>
    </div>
  );
};

export default Hero;
