import styles from "./Component.module.css";

export default function Card(props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.cardHeader}>
          <h4>{props.title}</h4>
          <a href="/" target="_blank">
            View All
          </a>
        </div>
        <div className={styles.cardDetails}>
          <a href={props.postUrl} target="_blank">
            {props.postTitle}
          </a>
          <a href={props.postUrl1} target="_blank">
            {props.postTitle1}
          </a>
          <a href={props.postUrl2} target="_blank">
            {props.postTitle2}
          </a>
        </div>
      </div>
    </div>
  );
}
