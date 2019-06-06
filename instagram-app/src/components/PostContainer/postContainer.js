import React from "react";
import "./post.css";
import PropTypes from "prop-types";
import Comments from "../CommentSection/commentSection";


const PostContainer= ({ post, update }) => {
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
      <Comments comments={post.comments} id={post.id} updatecomments={update} likes={post.likes} time={post.timestamp}/>
    </div>
  );
};
PostContainer.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    comments: PropTypes.array
  })
};

PostContainer.defaultProps = {
  likes: 0,
  comments: []
};

export default PostContainer;
