import * as React from "react";
import * as styles from "./Navigator.module.css";
import { Link } from "gatsby";

const Hero = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.nav}>
        <Link
          className={styles.navChild}
          to="/"
          activeStyle={{ color: "#6666ff", backgroundColor: "#efefff" }}
          activeClassName="active"
        >
          📁 Projects
        </Link>
        <Link
          className={styles.navChild}
          to="/write"
          activeStyle={{ color: "#ff512e", backgroundColor: "#ffede9" }}
          activeClassName="active"
        >
          📝 Write
        </Link>
        <Link
          className={styles.navChild}
          to="/links"
          activeStyle={{ color: "#1fb8ff", backgroundColor: "#e8f8ff" }}
          activeClassName="active"
        >
          ➡️ Links
        </Link>

      </div>
    </div>
  );
};

export default Hero;
