import React from "react";
import Comment from "./comment";
import "./commentSection.css";

const CommentSection = ({comments}) => {
  return (
    <div>

      {comments.map(comment => 
        <Comment key={comment.id} comment={comment} />
      )}
    </div>
  );
};
export default CommentSection;
