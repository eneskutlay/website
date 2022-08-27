import * as React from "react";
import "../styles/index.css";
import Hero from "../components/Hero/Hero";
import Navigator from "../components/Navigator/Navigator";

const IndexPage = () => {
  return (
    <div className="root">
      <Hero />
      <Navigator />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Blog</title>;
