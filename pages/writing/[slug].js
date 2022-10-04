import client from "../../lib/client";
import styles from "../../styles/Post.module.css";
import { PortableText } from "@portabletext/react";
import { componentsConf } from "../../lib/portableComponent";
import Link from "next/link";

export default function Post({ post }) {
  const { body = [] } = post;
  return (
    <div className={styles.root}>
      <article className={styles.article}>
        <h1>{post.title}</h1>
        <PortableText value={body} components={componentsConf} />
      </article>
      <Link href="/writing">
        <a className={styles.back}>← Go back</a>
      </Link>
    </div>
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
