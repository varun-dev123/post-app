import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const api = "https://jsonplaceholder.typicode.com/posts";
    axios.get(api).then(res => {
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }

  render() {
    const { posts } = this.state;
    const renderPosts = posts.length ? (
      posts.map(p => {
        return (
          <div className="post-card" key={p.id}>
            <Link to={"post/" + p.id}>
              <h1>{p.title}</h1>
              <p>{p.body}</p>
            </Link>
          </div>
        );
      })
    ) : (
      <h4>Loading posts...</h4>
    );
    return (
      <div>
        <h1>Posts</h1>
        {renderPosts}
      </div>
    );
  }
}

export default Posts;
