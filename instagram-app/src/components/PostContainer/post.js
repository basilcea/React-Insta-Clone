import React from "react";
import "./post.css";
import Comments from "../CommentSection/commentSection";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({post}) => {
  return (
    <div>
    <div>
    <img src={post.thumbnailUrl} alt='' />
    </div>
    <div>
    <img src={post.imageUrl} alt='' />
    </div>
     
      <div>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faComment} />
      </div>
      <p>{post.likes} likes</p>
      <Comments comments={post.comments} />
   
    </div>
  );
};
export default Post;
