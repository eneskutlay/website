import styles from "./Hero.module.css";


export default function Hero(props) {
  return (
    <div className={styles.hero}>
      <h1>{props.detailsTitle}</h1>
      <p className={styles.heroDetails}>{props.detailInfo}</p>
    </div>
  );
}
