import styles from "./Component.module.css";

export default function List(props) {
  return (
    <div className={styles.cardChild}>
      <a href={props.url} target="_blank">
        {props.title}
      </a>
      <p>{props.detail}</p>
    </div>
  );
}
