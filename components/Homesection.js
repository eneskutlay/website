import styles from "./Component.module.css";

const Homesection = ({ children, topic }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.cardHeader}>
          <h2>{topic}</h2>
          <a href="/" target="_blank">
            View All
          </a>
        </div>
      </div>
      <div className={styles.realChild}>{children}</div>
    </div>
  );
};

export default Homesection;
