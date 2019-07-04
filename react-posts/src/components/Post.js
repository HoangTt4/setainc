import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, body, userId }) => (
  <li tooltip={body}>
    {title} [{userId}]
  </li>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired
};

export default Post;
