import styles from "./ListItem.module.css";
export default function ListItem(props) {
  return (
    <a
      target={props.target}
      className={styles.cardChild}
      rel="noopener noreferrer"
      href={props.url}
    >
      {props.title}
      <p>{props.detail}</p>
    </a>
  );
}
