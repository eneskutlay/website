import styles from "./Component.module.css";

export default function Hero(props) {
  return (
    <div className={styles.hero}>
      <h1>{props.detailsTitle}</h1>
      <span className={styles.heroDetails}>
        {props.detailInfo}
      </span>
    </div>
  );
}
