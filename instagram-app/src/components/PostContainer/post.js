import React from "react";
import "./post.css";
import PropTypes from 'prop-types';
import Comments from "../CommentSection/commentSection";
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
        <FontAwesomeIcon icon={['far','heart']}/>
        <FontAwesomeIcon icon={['far','comment']} transform='rotate-270' />
      </div>
      <p>{post.likes} likes</p>
      <Comments comments={post.comments} />
   
    </div>
  );
};
Post.propTypes= {
    post: PropTypes.shape({
        thumbnailUrl:PropTypes.string,
        imageUrl:PropTypes.string.isRequired,
        faHeart:PropTypes.instanceOf(FontAwesomeIcon),
        faComment:PropTypes.instanceOf(FontAwesomeIcon),
        likes:PropTypes.number.isRequired,
        comments:PropTypes.array

    })

}

Post.defaultProps = {
    likes:0,
    comments:[]
}

export default Post;
