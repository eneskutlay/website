import styles from "./WriteSection.module.css";

export default function WriteSection({ children, topic }) {
  return (
    <div className={styles.blog}>
      <div className={styles.postList}>
        <h1>{topic}</h1>
        {children}
      </div>
    </div>
  );
}
