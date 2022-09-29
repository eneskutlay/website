import style from "./PageLayout.module.css";
import { Header } from "../components";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <div className={style.rootContainer}>{children}</div>
    </>
  );
}
