import React from "react";
import "./post.css";
import PropTypes from "prop-types";
import Comments from "../CommentSection/commentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ post }) => {
  return (
    <div className='post-card'>
      <div className ='post-owner-info'>
        <img src={post.thumbnailUrl} alt="" />
        <div className='post-creator'> {post.username}</div>
        <div className='post-dropdown'><p>...</p></div>
      </div>
      <div className='post-image'>
        <img src={post.imageUrl} alt="" />
      </div>

      <div className ='post-actions'>
        <div className ='post-comment-action'>
        <div className='post-icon-action'>
        <FontAwesomeIcon icon={["far", "heart"]} />
        <FontAwesomeIcon icon={["far", "comment"]} transform="rotate-270" />
        <FontAwesomeIcon icon="external-link-alt" transform="rotate-310" />
        </div>
        <p>{post.likes} likes</p>
        </div>
        <div className='post-bookmark'>
        <FontAwesomeIcon icon={["far", "bookmark"]} />
        </div>
      </div>
      <Comments comments={post.comments} />
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    faHeart: PropTypes.instanceOf(FontAwesomeIcon),
    faComment: PropTypes.instanceOf(FontAwesomeIcon),
    likes: PropTypes.number.isRequired,
    comments: PropTypes.array
  })
};

Post.defaultProps = {
  likes: 0,
  comments: []
};

export default Post;
