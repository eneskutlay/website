import styles from "./Component.module.css";
import { navLinks } from "../src/data";
import Link from "./ActiveLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {navLinks.map((link, index) => {
          return (
            <ul className={styles.navbarUl}>
              <Link activeClassName={styles.navbarLu} href={link.path}>
                <li className={styles.navbarLi} key={index}>
                  {link.name}
                </li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}
