import styles from "./Component.module.css";
import { navLinks } from "../src/data";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
  return (
    <header className={styles.header}>

      <nav className={styles.navbar}>
        {navLinks.map((link, index) => {
          return (
            <ul className={styles.navbarUl}>
              <Link href={link.path}>
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
