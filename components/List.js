import styles from "./Component.module.css";

export default function List(props) {
  return (
    <a className={styles.cardChild} href={props.url} target="_blank">
      {props.title}
      <p>{props.detail}</p>
    </a>
  );
}
