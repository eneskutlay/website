import styles from "./HomeSection.module.css";

export default function HomeSection({ children, topic, viewUrl }) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.cardHeader}>
          <h2>{topic}</h2>
          <a href={viewUrl}>View All</a>
        </div>
      </div>
      <div className={styles.realChild}>{children}</div>
    </div>
  );
}
