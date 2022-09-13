import styles from "./Component.module.css";

export default function PostItem(props) {
  return (
    <div className={styles.postSection}>
      <h3>{props.postTitle}</h3>
      <p>{props.postDate}</p>
    </div>
  );
}
