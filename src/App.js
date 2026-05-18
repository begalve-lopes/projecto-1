import "./App.css";
import { Component } from "react";
import { PostCard } from "./components/PostCard";
import { loadPosts } from "./util/load-posts";
class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPoststs();
  }

  loadPoststs = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
   
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <PostCard key={post.id}  post={post} />
          ))}
        </div>
      </section>
    );
  }
}

export default App;
