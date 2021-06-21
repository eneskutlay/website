import Link from "next/link";
import styles from "../styles/Home.module.css";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
