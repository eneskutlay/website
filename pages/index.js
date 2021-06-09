import styles from "../styles/Home.module.css";
import Introduction from "../components/Introduction";

export default function Home() {
	return (
		<div className={styles.container}>
			<Introduction />
		</div>
	);
}
