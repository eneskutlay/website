import styles from "../styles/Home.module.css";
import Image from "next/image";
import Social from "./Social";
function Introduction() {
    return (
        <div className={styles.main}>
            <main>
                <h1>
                    Hello 👋 I'm
                    <span>
                        <Image src="/me.png" alt="Enes Kutlay" width={100} height={100} />
                    </span>
                </h1>
                <h2>
                    I am interested in web development and specifically front-end
                    development.
                </h2>
                <p>
                    I also try to develop open-source software, read books to strengthen
                    my ideas, and blog to share what I know. I'm still very new however
                    maybe we can do something together. You can reach out me at anytime
                    via the links below.
                </p>
            </main>
            <Social />
        </div>
    );
}

export default Introduction;
