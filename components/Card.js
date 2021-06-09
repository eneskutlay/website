import styles from "../styles/Home.module.css"
import Image from "next/image";

const Card = (props) => {
	return (
		<div>
			<div className={styles.cards}>
				<span>
					<Image src={props.src} alt={props.alt} width={30} height={30} title={props.title} />
				</span>
			</div>
		</div>
	);
};

export default Card;
