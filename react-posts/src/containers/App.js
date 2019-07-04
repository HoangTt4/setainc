import React from "react";
import { connect } from "react-redux";
import Posts from "../components/Posts";
import { AddPost } from "./AddPost";
import { fetchPosts } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { error, loading, posts } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <AddPost />
        <Posts posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postsByApi.items,
    loading: state.postsByApi.loading,
    error: state.postsByApi.error
  };
};

export default connect(mapStateToProps)(App);
