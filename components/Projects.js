import styles from "../styles/Home.module.css";
import Image from "next/image";

const Projects = (props) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className={styles.projectscard}>
      <h3>{props.title}</h3>
      <Image loader={myLoader} src={props.src} alt={props.alt} width={250} height={160}  />
      <p>
        {props.details}
        <span>
          <a target="_blank" rel="noopener" href={props.repo}>
            GitHub
          </a>
        </span>
      </p>
    </div>
  );
};

export default Projects;
