import React from 'react';
import './commentSection.css';

const Comment = (props)  => {
    return (
    <div className='comment'> 
        <p><span>{props.username}</span> {props.text}</p>
    </div>
    )
}
export default Comment