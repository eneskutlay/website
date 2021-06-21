import styles from "../styles/Home.module.css";
const Posts = ({ post }) => {
  return (
    <div className={styles.blog}>
      <img src={post.coverImage} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.brief}</p>
    </div>
  );
};

export default Posts;
