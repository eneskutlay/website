import client from "../../client";
import styles from "../../styles/Post.module.css";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const componentsConf = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure>
          <img alt={value.alt || " "} loading="lazy" src={urlFor(value)} />
        </figure>
      );
    },
  },
};

export default function Post({ post }) {
  const { body = [] } = post;
  return (
    <div className={styles.root}>
      <article>
        <h1>{post.title}</h1>
        <PortableText value={body} components={componentsConf} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
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
