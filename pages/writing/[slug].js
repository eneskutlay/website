import client from "../../lib/client";
import styles from "../../styles/Post.module.css";
import { PortableText } from "@portabletext/react";
import { componentsConf } from "../../lib/portableComponent";
import Link from "next/link";
import Head from "next/head";

export default function Post({ post }) {
  const { body = [] } = post;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={post.title} key="title" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app//${encodeURIComponent(
            post.title
          )}.?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`}
        />
      </Head>
      <div className={styles.root}>
        <article className={styles.article}>
          <h1>{post.title}</h1>
          <PortableText value={body} components={componentsConf} />
        </article>
        <Link href="/writing">
          <a className={styles.back}>← Go back</a>
        </Link>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}
