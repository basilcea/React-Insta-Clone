import React ,{Component}from "react";
import Comment from "./comment";
import uuid from 'uuid';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const Comments  = styled.div`
   padding:2%;
   line-height: 17px;
`;

const CommentActions = styled.div`
   display:flex;
    margin-top:3%;
    justify-content: space-between;
    align-items:flex-start;
`;
const CommentAction = styled.div`
    width:30%;
    display:flex;
    justify-content: flex-start;
    flex-direction: column;
`;
const IconAction = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    flex-direction:row;
    padding-left:6%;
    font-size:1.5rem;
`;
const Bookmark = styled.div`
width: 50%;
    margin-right:5%;
    display:flex;
    justify-content: flex-end;
    font-size:1.5rem;

`;
const Form = styled.form`
  width:87%;
  display:flex;
  justify-content:flex-start;
  flex-direction:row;
  margin:0%;
  margin-top:3%;
  margin-left:5%;
  padding:0;
  input[type="text"]{
    border:none;
    margin:0;
    width:80%;
    font-size:16px;
    border-radius:5px 0px 0px 5px;
    padding:0;
    padding-left:5%;
  }
  input[type="submit"]{
    border:none;
    margin:0;
    width:20%;
    font-size:16px;
    border-radius:0px 5px 5px 0px;
  }
`;
const Divs = styled.div`
  color:silver;
`;

class CommentSection extends Component {
  constructor(props){
    super(props)
    this.state=({
      comments: this.props.comments,
      comment:'',
      currentUser:localStorage.getItem('username'),
      id:this.props.id,
      likes:this.props.likes,
      clicked:[],
    })

  }
  onLikeHandler = e => {
    e.preventDefault();
    let value = this.state.likes.valueOf()
    const clicked = Object.assign([], this.state.clicked)
      if(clicked.includes(this.state.currentUser)){
        value = Number(value) -1
        const index = clicked.indexOf(this.state.currentUser)
        clicked.pop(index)
        this.setState({
        clicked:clicked,
        likes:value.toString()
    })
    }
      else{
        value = Number(value)+ 1
        clicked.push(this.state.currentUser)
        this.setState({
          clicked:clicked,
          likes:value.toString()
      })
      }
  
  }
  onChangeHandler = e =>{
    this.setState({
      comment: e.target.value,
  })
}
addNewComment = (e) => {
  e.preventDefault();
  const newComments = Object.assign([], this.state.comments)
  if(this.state.comment!==''){
    newComments.push({
    id:uuid(),
    text:this.state.comment,
    username:this.state.currentUser,
  })
  this.setState({
    comments:newComments,
    comment:'',
  })
  this.props.updatecomments(this.state.id , newComments)
}
}
deleteComment = e =>{
  const newComments = Object.assign([], this.state.comments)
  const deleted = newComments.find(comment => comment.id === e)
  const index = newComments.indexOf(deleted)
  newComments.pop(index)
  this.setState({
    comments:newComments,
  })
}
render(){
  return(
    <Comments>
      <CommentActions>
        <CommentAction>
           <IconAction>
              <FontAwesomeIcon icon={["far", "heart"]} onClick={(e) => this.onLikeHandler(e)} />
              <FontAwesomeIcon icon={["far", "comment"]} transform="rotate-270" />
              <FontAwesomeIcon icon="external-link-alt" transform="rotate-310" />
            </IconAction>
            <p>{this.state.likes} likes</p>
        </CommentAction>
        <Bookmark>
          <FontAwesomeIcon icon={["far", "bookmark"]} />
        </Bookmark>
      </CommentActions>
    {this.state.comments.map(comment => 
      <Comment key={comment.id} comment={comment} deleteHandler ={this.deleteComment}/>
    )}
    <Divs>
    {moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
    </Divs>
    <Form className='add-comment-form'  onSubmit={e => this.addNewComment(e)}>
    <input type='text' className='text' value={this.state.comment} onChange={this.onChangeHandler} placeholder='Add Comment...'/>
    <input type='submit' value='Post' />
    </Form>
    </Comments>
  )
}
}

export default CommentSection;

