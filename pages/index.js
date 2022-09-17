import Head from "next/head";
import styles from "../styles/Home.module.css";
import client from "../client";
import { Hero, List, Homesection } from "../components/";

export default function Home({ post, details, code }) {
  return (
    <div className={styles.root}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Hero
          detailsTitle={details[0].title}
          detailInfo={details[0].description}
        />
        <Homesection topic="Recent Posts">
          {post.map((post) => {
            const { title, date, slug } = post;
            return (
              <List
                key={`post_${slug}`}
                title={title}
                detail={date}
                url={`/writing/${slug}`}
              />
            );
          })}
        </Homesection>
        <Homesection topic="Some Codes">
          {code.map((code) => {
            const { title, description, href } = code;
            return (
              <List
                key={`code_${href}`}
                title={title}
                url={href}
                detail={description}
              />
            );
          })}
        </Homesection>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const details = await client.fetch(
    `*[_type == "details"] | order(_createdAt desc)`
  );
  const post = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc)[0..2]`
  );
  const code = await client.fetch(
    `*[_type == "code"] | order(_createdAt desc)`
  );
  return {
    props: {
      post,
      details,
      code,
    },
  };
}