import React from "react";
import Post from "../components/Posts";
import Loader from "../components/Loader";

const query = `
    {
      user(username: "eneskutlay") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

class blog extends React.Component {
  state = {
    posts: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const ApiResponse = await response.json();

    this.setState({
      posts: ApiResponse.data.user.publication.posts,
      loading: false,
    });
  };

  render() {
    if (this.state.loading) return <Loader />;

    return (
      <div>
        {this.state.posts.map((post, index) => (
          <a
            key={index}
            target="_blank"
            href={`https://blog.eneskutlay.dev/${post.slug}`}
            rel="noopener"
          >
            <Post post={post} />
          </a>
        ))}
      </div>
    );
  }
}

export default blog;
