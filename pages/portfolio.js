import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
const portfolio = () => {
  return (
    <div>
      <div className={styles.portfolio}>
        <h2>Before commenting, please keep in mind that I'm new to this. 🙏</h2>

        <p>
          You can reach the projects I made (and haven't deleted yet) from the
          links below. You can see the responsive design logic, which I pay
          special attention to while developing the projects, on the models, and
          you can give feedback with the{" "}
          <a target="_blank" href="https://github.com/eneskutlay">
            Github
          </a>{" "}
          link. <br />
          <i>I really need this.</i>
        </p>
      </div>
      <div className={styles.projects}>
        <Projects
          title="Responsive Newsletter Website"
          details="Email marketing | ReactJs"
          src="/mailmockup.gif"
          alt="me"
          repo="https://github.com/eneskutlay/Newsletter-Website"
        />
        <Projects
          title="Responsive Magazine Website"
          details="Online magazine | ReactJs"
          src="/magazine.gif"
          alt="me"
          repo="https://github.com/eneskutlay/Alternatif-Dergi-Website"
        />
        <Projects
          title="Responsive Personal Website"
          details="Personal website | ReactJs | TypeItJs"
          src="/personal.gif"
          alt="me"
          repo="https://github.com/eneskutlay/eneskutlay.github.io"
        />
        <Projects
          title="Desktop Task Manager App"
          details="Desktop To-Do App | ElectronJs "
          src="/todo.gif"
          alt="me"
          repo="https://github.com/eneskutlay/Fresh"
        />
      </div>
    </div>
  );
};

export default portfolio;
