import React, {Component} from 'react';
import Post from './components/PostContainer/post';
import SearchBar from './components/SearchBar/searchBar';
import './App.css';
import dummyData from './dummy-data' ;
import {library} from '@fortawesome/fontawesome-svg-core'
import { faHeart , faComment, faCompass , faUser, faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSearch,faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHeart,faComment,faCompass,faUser,faInstagram, faSearch, faBookmark ,faExternalLinkAlt
) 

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      posts:[],
    }
  }

componentDidMount(){
  const data = localStorage.getItem('posts');
    const posts = JSON.parse(data);
    this.setState({
      posts: posts || dummyData
    });
  }
 
updatePost= (id  , comments )=>{
 const newPostsArray = Object.assign([],this.state.posts)
 const updatedPosts= newPostsArray.map(post => {
  if (post.id === id) {
    post.comments = comments;
    return post;
  }
  return post;
 })
 this.setState({
  posts: updatedPosts
 })
 localStorage.clear();
 localStorage.setItem('posts',JSON.stringify(updatedPosts))
}
filter =(e) => {
  const data = localStorage.getItem('posts');
  const posts = JSON.parse(data);
  const results = posts.filter(
    post =>  post.username.toLowerCase().includes(e.target.value.toLowerCase())
    )
  

    if(e.target.value ==='' || results.length === 0){
      this.setState({
        posts:posts
      })
    }
    else{
      this.setState({
        posts: results
      })
    }

}
  render(){
    return(
      <div className ='App-container'>
        <SearchBar  searchHandler={this.filter}/>
        <div className='App-section'>
        <div className='App-block'></div>
        {
          this.state.posts.map(data => <Post key={data.id} id={data.id}  post={data}  update={this.updatePost} />)
        }
        </div>
      </div>
    )
  }

}

export default App;
