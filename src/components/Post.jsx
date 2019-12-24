import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;

    axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then(res => {
      this.setState({
        post: res.data
      });
    });
  }
  render() {
    const { post } = this.state;
    const renderPost = post ? (
      <div className="post-card">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ) : (
      <h4>Loading..</h4>
    );
    return (
      <div>
        <h1>Post</h1>
        {renderPost}
      </div>
    );
  }
}

export default Post;
