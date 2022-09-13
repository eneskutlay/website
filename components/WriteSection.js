import styles from "./Component.module.css";

const WriteSection = ({ children, topic }) => {
  return (
    <div className={styles.blog}>
      <div className={styles.postList}>
        <h1>{topic}</h1>
        {children}
      </div>
    </div>
  );
};

export default WriteSection;
