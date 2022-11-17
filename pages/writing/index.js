import client from "../../lib/client";
import { PostItem, WriteSection } from "../../components";
import Head from "next/head";
import { head } from "../../lib/data";

export default function Writing({ post }) {
  return (
    <>
      <Head>
        <title>{head.writeTitle}</title>
        <meta name="description" content={head.writeDesc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={head.writeTitle} key="title" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app//${encodeURIComponent(
            head.writeTitle
          )}.?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`}
        />
      </Head>
      <WriteSection topic="Writing">
        {post.map((post) => {
          const { title, date, slug } = post;
          return (
            <PostItem
              key={`post_${slug.current}`}
              postTitle={title}
              postDate={date}
              url={`/writing/${slug.current}`}
            />
          );
        })}
      </WriteSection>
    </>
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
