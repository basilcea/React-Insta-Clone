import React, {Component} from 'react';
import Post from './components/PostContainer/post';
import SearchBar from './components/SearchBar/searchBar';
import './App.css';
import dummyData from './dummy-data' ;
import {library} from '@fortawesome/fontawesome-svg-core'
import { faHeart , faComment, faCompass , faUser, faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSearch,faExternalLinkAlt, faUserInjured} from '@fortawesome/free-solid-svg-icons';
import uuid from 'uuid';

library.add(
    faHeart,faComment,faCompass,faUser,faInstagram, faSearch, faBookmark ,faExternalLinkAlt
) 

class App extends Component{
  constructor(){
    super();
    this.state={
      posts:dummyData,
      post:'',
      comment:'',
    }
  }
  onChangeHandler = e =>{
    this.setState({
      comment: e.target.value,
  })
}

  onClickHandler = (e, id) => {
    e.preventDefault();
    const newPosts = Object.assign([], this.state.posts)
    const selectedPost = newPosts.find(post => post.id === id);
    console.log(selectedPost.comments)
    selectedPost.comments.push({
      id:uuid(),
      text:this.state.comment,
      username:'newUser'
    })
    this.setState({
      posts:newPosts,
      comment:'',
    })

  }
  render(){
    return(
      <div className ='App-container'>
        <SearchBar />
        <div className='App-section'>
        <div className='App-block'></div>
        {
          dummyData.map(data => <Post key={data.id} id={data.id}  post={data} clickPost={this.onClickHandler} newInput={this.onChangeHandler} newComment={this.state.comment}/>)
        }
        </div>
      </div>
    )
  }

}

export default App;
