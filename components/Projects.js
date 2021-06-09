import styles from "../styles/Home.module.css"
import Image from "next/image";

const Projects = (props) => {
	return (
		<div className={styles.projectscard}>
			<h3>{props.title}</h3>
			<Image src={props.src} alt={props.alt} width={250} height={160} />
			<p>
				{props.details}
				<span>
					<a target="_blank" href={props.repo}> GitHub</a>
				</span>
			</p>
		</div>
	);
};

export default Projects;
