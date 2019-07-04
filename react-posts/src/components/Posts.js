import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Posts;
