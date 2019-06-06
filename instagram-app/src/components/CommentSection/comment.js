import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import {Username} from '../Styles/Reusables';
const SingularComment= styled.div`
display:flex;
justify-content:flex-start;
flex-direction:row;
align-items:center;
height:6.5vh;
&:hover{
        border-top:1px solid #999;
    }
p{
    width:80%;
    
}
@media (max-width:500px){
    height:10vh;
}
`;
const DeleteButton = styled.button`
width:20%;
background-color:inherit;
margin:0;
    color:#efefef;
    border:none;
    height:6.5vh;
 
    &:hover{
        background-color:red;
        color:white;
        border-radius:2px;

    }
  
  
`;

const Comment = ({comment , deleteHandler})  => {
    const style={
        display:(comment.username===localStorage.getItem('username'))? 'block':'none'
    }
    return (
    <SingularComment> 
       <p><Username>{comment.username}</Username> {comment.text}</p>
        <DeleteButton style={style} onClick={()=> deleteHandler(comment.id)}>Delete</DeleteButton>
    </SingularComment>
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