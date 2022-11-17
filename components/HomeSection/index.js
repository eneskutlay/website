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
      {(() => {
        if (children.length > 0) {
          return <div className={styles.realChild}>{children}</div>;
        } else {
          return (
            <div className={styles.realChild}>
              <h3>No blog posts have been published yet.</h3>
            </div>
          );
        }
      })()}
    </div>
  );
}
