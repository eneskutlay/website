import client from "../../client";
import { PostItem, WriteSection } from "../../components";

export default function Writing({ post }) {
  console.log(post);
  return (
    <WriteSection topic="Writing">
      {post.map((post) => {
        const { title, date, slug } = post;

        return (
          <PostItem
            key={`post_${slug}`}
            postTitle={title}
            postDate={date}
            url={`/writing/${slug.current}`}
          />
        );
      })}
    </WriteSection>
  );
}

export async function getStaticProps() {
  const post = await client.fetch(`*[_type == "post"] | order(date desc)`);

  return {
    props: {
      post,
    },
  };
}
