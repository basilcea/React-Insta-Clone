import React from 'react';
import PropTypes from 'prop-types';
import './commentSection.css';

const Comment = ({comment , deleteHandler})  => {
    const style={
        display:(comment.username===localStorage.getItem('username'))? 'block':'none'
    }
    return (
    <div className='comment'> 
        <p><span className='comment-username'>{comment.username}</span> {comment.text}</p>
        <button  className='comment-delete' style={style} onClick={()=> deleteHandler(comment.id)}>Delete</button>
    </div>
    )
}
Comment.propTypes = {
    comment: PropTypes.shape({
        id:PropTypes.string.isRequired,
        username:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired
    })
}
export default Comment