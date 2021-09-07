import Link from "next/link";
import styles from "../styles/Home.module.css";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <Link title="My portfolio" href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link title="Contact with me" href="/contact">
          <a>Contact</a>
        </Link>
        <Link title="Blog posts" href="/blog">
          <a>Blog</a>
        </Link>
        <Link title="Home" href="/">
          <a>Home</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
