import React from 'react';
import Comment from './comment';
import './commentSection.css';

const CommentSection = (props) =>{
return (
    <div>
        {props.comments.map(comment => <Comment  props={comment} />)}
    </div>
)

}
export default CommentSection