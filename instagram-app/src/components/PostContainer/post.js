import React from 'react';
import './post.css';
import { farHeart } from "@fortawesome/free-regular-svg-icons";
import { farComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props) => {
    return (
        <div>
         <img src={props.url} alt={''}/>
        <div>
        <FontAwesomeIcon icon={farHeart} />
        <FontAwesomeIcon icon={farComment} />
        </div>
         <p>{props.likes}  likes</p>
        </div>
    )
}
export default Post