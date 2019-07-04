import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: "",
        body: "",
        userId: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { post } = this.state;
    this.setState({
      post: {
        ...post,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const { post } = this.state;
    dispatch(addPost(post.title, post.body, parseInt(post.userId)));
  }

  render() {
    return (
      <form name="form" onSubmit={this.handleSubmit}>
        <input
          placeholder="user Id (int)"
          type="text"
          name="userId"
          onChange={this.handleChange}
        />
        <input
          placeholder="Title"
          type="text"
          name="title"
          onChange={this.handleChange}
        />
        <textarea placeholder="Body" name="body" onChange={this.handleChange} />
        <input type="submit" value="Add Post" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postsByApi.items,
    loading: state.postsByApi.loading,
    error: state.postsByApi.error
  };
}

const connectedAddPost = connect(mapStateToProps)(AddPost);
export { connectedAddPost as AddPost };
