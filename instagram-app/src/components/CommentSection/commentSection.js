import React from "react";
import Comment from "./comment";
import PropTypes from 'prop-types';
import "./commentSection.css";

const CommentSection = ({comments}) => {
  return (
    <div className='comments'>
      {comments.map(comment => 
        <Comment key={comment.id} comment={comment} />
      )}
    </div>
  );
};

CommentSection.propTypes= {
    comments: PropTypes.arrayOf(PropTypes.object)
}
export default CommentSection;

