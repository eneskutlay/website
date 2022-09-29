import styles from "./Component.module.css";
import Link from "next/link";

export default function PostItem(props) {
  return (
    <Link href={props.url}>
      <div className={styles.postSection}>
        <h3>{props.postTitle}</h3>
        <p>{props.postDate}</p>
      </div>
    </Link>
  );
}
