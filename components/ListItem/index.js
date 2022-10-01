import styles from "./ListItem.module.css";

export default function ListItem(props) {
  return (
    <a
      className={styles.cardChild}
      rel="noopener noreferrer"
      href={props.url}
      target="_blank"
    >
      {props.title}
      <p>{props.detail}</p>
    </a>
  );
}
