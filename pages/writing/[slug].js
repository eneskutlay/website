// [slug].js
import client from "../../client";

const Post = ({ post }) => {
  const title = post;
  return (
    <div>
      <h1>{title}</h1>
    </div>
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

//The query will change, not just the last 3 posts. All posts will be called
export async function getStaticProps() {
  const post = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc)[0..2]`
  );

  return {
    props: {
      post,
    },
  };
}

/*
export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{title, "name": author->name}
  `,
    { slug }
  );
  return {
    props: {
      post,
    },
  };
}
*/
export default Post;
