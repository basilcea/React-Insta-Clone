import React from "react";
import PropTypes from "prop-types";
import Comments from "../CommentSection/commentSection";
import styled from 'styled-components';
import {Username} from '../Styles/Reusables';

const UserCard = styled.div`
  width:100%;
border:none;
  border-top:1px solid #999;
  border-bottom:1px solid #999;
  margin:5% 0%;
  background-color:#efefef;
  &:last-child{
    margin-bottom:0%
  }
  @media (min-width:500px){
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        border-radius: 5px
}
@media (min-width:1000px){
        margin:10% 0%;
}
`;
const  UserInfo = styled.div`
   display:flex;
    justify-content: space-between;
    width:90%;
    align-items:center;
    margin:0% 5%;
`;
const UserThumbnail = styled.img`
    border-radius: 50%;
        width: 40px;
        height:40px;
`;
const DropDown = styled.div`
 color:black;
  font-size:2rem;
`;

const PostImage = styled.div`
width:100%;
`;
const Image = styled.img`
width:100%;
`;

const PostContainer= ({ post, update }) => {
  return (
    <UserCard>
      <UserInfo>
        <UserThumbnail src={post.thumbnailUrl} alt="" />
        <Username> {post.username}</Username>
        <DropDown><p>...</p></DropDown>
      </UserInfo>
      <PostImage>
        <Image src={post.imageUrl} alt="" />
      </PostImage>
      <Comments comments={post.comments} id={post.id} updatecomments={update} likes={post.likes} time={post.timestamp}/>
    </UserCard>
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
