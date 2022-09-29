import client from "../../client";
import styles from "../../styles/Post.module.css";

const Post = ({ post }) => {
  console.log(post);
  return (
    <article className={styles.root}>
      <h1>{post.title}</h1>
      {post.body.map((body) => {
        return (
          <div key={body._key}>
            {body.style === "normal" && <p>{body.children[0].text}</p>}
            {body.style === "h1" && <h1>{body.children[0].text}</h1>}
            {body.style === "h2" && <h2>{body.children[0].text}</h2>}
            {body.style === "h3" && <h3>{body.children[0].text}</h3>}
            {body.style === "blockquote" && (
              <blockquote>{body.children[0].text}</blockquote>
            )}
          </div>
        );
      })}
    </article>
  );
};

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

export default Post;
