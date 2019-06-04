import React from 'react';
import PropTypes from 'prop-types';
import './commentSection.css';

const Comment = ({comment})  => {
    return (
    <div className='comment'> 
        <p><span>{comment.username}</span> {comment.text}</p>
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