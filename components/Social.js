import styles from "../styles/Home.module.css";
import Card from "./Card";

const Social = () => {
  return (
    <div className={styles.social}>
      <a href="https://github.com/eneskutlay" rel="nofollow" target="_blank">
        <Card src="/github.svg" alt="Github Icon" title="Github Profile" />
      </a>
      <a href="https://twitter.com/enesevski" rel="nofollow" target="_blank">
        <Card src="/twitter.svg" alt="Twitter Icon" title="Twitter Profile" />
      </a>
      <a href="https://www.linkedin.com/in/eneskutlay/" rel="nofollow" target="_blank">
        <Card
          src="/linkedin.svg"
          alt="Linkedin Icon"
          title="Linkedin Profile"
        />
      </a>
      <a href="https://blog.eneskutlay.dev/" rel="nofollow" target="_blank">
        <Card src="/hashnode.svg" alt="Hashnode Icon" title="Blog Posts" />
      </a>
    </div>
  );
};

export default Social;
