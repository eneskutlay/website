import * as React from "react";
import * as styles from "./Navigator.module.css";
import { Link, useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navFirst
          navSec
          navThr
        }
      }
    }
  `)
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <Link
          className={styles.navChild}
          to="/"
          activeStyle={{ color: "#6666ff", backgroundColor: "#efefff" }}
          activeClassName="active"
        >
          {data.site.siteMetadata.navFirst}
        </Link>
        <Link
          className={styles.navChild}
          to="/write"
          activeStyle={{ color: "#ff512e", backgroundColor: "#ffede9" }}
          activeClassName="active"
        >
          {data.site.siteMetadata.navSec}
        </Link>
        <Link
          className={styles.navChild}
          to="/links"
          activeStyle={{ color: "#1fb8ff", backgroundColor: "#e8f8ff" }}
          activeClassName="active"
        >
          {data.site.siteMetadata.navThr}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
