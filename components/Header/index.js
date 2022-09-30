import styles from "./Header.module.css";
import { navLinks } from "../../lib/data";
import Link from "../ActiveLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {navLinks.map((link, index) => {
          return (
            <ul className={styles.navbarUl} key={index}>
              <Link activeClassName={styles.activeNavbar} href={link.path}>
                <li className={styles.navbarLi}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}
