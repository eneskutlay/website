import Head from "next/head";
import styles from "../styles/Home.module.css";
import client from "../lib/client";
import { head } from "../lib/data";
import { Hero, ListItem, Homesection } from "../components/";

export default function Home({ post, details, code }) {
  return (
    <>
      <Head>
        <title>{head.homeTitle}</title>
        <meta name="description" content={head.homeDesc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={head.homeTitle} key="title" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app//${encodeURIComponent(
            head.homeTitle
          )}.?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`}
        />
      </Head>
      <div className={styles.root}>
        <div className={styles.container}>
          <Hero
            detailsTitle={details[0].title}
            detailInfo={details[0].description}
          />
          <Homesection viewUrl={"/writing"} topic="Recent Posts">
            {post.map((post) => {
              const { title, date, slug } = post;
              return (
                <ListItem
                  key={`post_${slug.current}`}
                  title={title}
                  detail={date}
                  url={`/writing/${slug.current}`}
                />
              );
            })}
          </Homesection>
          <Homesection
            viewUrl={"https://github.com/eneskutlay"}
            topic="Some Codes"
          >
            {code.map((code) => {
              const { title, description, href } = code;
              return (
                <ListItem
                  key={`code_${href}`}
                  title={title}
                  url={href}
                  detail={description}
                  target="_blank"
                />
              );
            })}
          </Homesection>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const details = await client.fetch(`*[_type == "details"]`);
  const post = await client.fetch(
    `*[_type == "post"] | order(date desc)[0..2]`
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
