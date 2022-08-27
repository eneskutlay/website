import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./Header.module.css"


const Header = () => {
  return (
    <div className={styles.main}>
      <StaticImage
        className="mainAvatar"
        layout="fixed"
        src="../../images/profile-pic.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <a href="https://twitter/enesevski" target="blank">🐦</a>
    </div>
  );
};

export default Header;
