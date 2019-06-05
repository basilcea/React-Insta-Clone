import React ,{Component}from "react";
import Comment from "./comment";
import "./commentSection.css";
import uuid from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CommentSection extends Component {
  constructor(props){
    super(props)
    this.state=({
      comments: this.props.comments,
      comment:'',
      currentUser:'Basil',
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
  newComments.push({
    id:uuid(),
    text:this.state.comment,
    username:'newUser'
  })
  this.setState({
    comments:newComments,
    comment:'',
  })
  this.props.updatecomments(this.state.id , newComments)
}
render(){
  return(
    <div className='comments'>
      <div className ='comment-actions'>
        <div className ='comment-action'>
           <div className='icon-action'>
              <FontAwesomeIcon icon={["far", "heart"]} onClick={(e) => this.onLikeHandler(e)} />
              <FontAwesomeIcon icon={["far", "comment"]} transform="rotate-270" />
              <FontAwesomeIcon icon="external-link-alt" transform="rotate-310" />
            </div>
            <p>{this.state.likes} likes</p>
        </div>
        <div className='bookmark'>
          <FontAwesomeIcon icon={["far", "bookmark"]} />
        </div>
      </div>
    {this.state.comments.map(comment => 
      <Comment key={comment.id} comment={comment} />
    )}
    <div>
    <form className='add-comment-form'  onSubmit={e => this.addNewComment(e)}>
    <input type='text' value={this.state.comment} onChange={this.onChangeHandler} placeholder='Add Comment...'/>
    <input type='submit' value='Post' />
    </form>
    </div>
    </div>
  )
}
}

export default CommentSection;

