import styles from "../styles/Home.module.css";
import Image from "next/image";

const contact = () => {
  return (
    <div className={styles.contact}>
      <h2>
        If you haven't heard of "no hello" before, please check the link first,
        and then you're ready to get in touch.
        <a
          href="https://nohello.net/"
          target="_blank"
          rel="noopener"
          style={{ color: "#B57E6F" }}
        >
          🚀
        </a>
      </h2>
      <p>
        We are now ready to communicate. You can send me an email by clicking on
        my e-mail address. I usually try to respond within 24 hours.
        <a target="_blank" rel="noopener" href="mailto:contact@eneskutlay.dev">
          <b> contact@eneskutlay.dev </b>
        </a>
        Your browser may not allow pop-ups. In this case, you need to send me a
        manual mail.
      </p>
      <div className={styles.nohello}>
        <Image
          src="/hello.svg"
          alt="Picture of the author"
          width={1600}
          height={650}
        />
      </div>
    </div>
  );
};

export default contact;
