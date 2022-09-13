import client from "../client";
import PostItem from "../components/PostItem";
import WriteSection from "../components/WriteSection";

export default function Writing({ post }) {
  console.log(post);
  return (
    <WriteSection topic="Write">
      {post.map((post) => {
        const { title, date, slug } = post;
        return (
          <PostItem key={`post_${slug}`} postTitle={title} postDate={date} url={`/writing/${slug}`} />
        );
      })}
    </WriteSection>
  );
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
