import React, {Component} from 'react';
import Postpage from './components/PostContainer/postPage';
import withAuthenticate  from './components/authentication/authenticate';
import './App.css';
import dummyData from './dummy-data' ;
import {library} from '@fortawesome/fontawesome-svg-core'
import { faHeart , faComment, faCompass , faUser, faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSearch,faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHeart,faComment,faCompass,faUser,faInstagram, faSearch, faBookmark ,faExternalLinkAlt
) 
const ComponentFromWithAuthenticate = withAuthenticate(Postpage);

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      posts:[],
      filtered:false,
      length:''
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
    if(e.target.value ===''){
      this.setState({
        posts:posts,
        filtered:false
      })
    }
    else if(results.length === 0){
      this.setState({
        posts:posts,
        filtered:true,
        length:'No Result Found'
      })
    }
    else{
      this.setState({
        posts: results,
        filtered:true,
        length:`Result Found: ${results.length}`,
      })
    }
}
  render(){
    return(
      <div className ='App-container'>
       {/* HOC */}
      <ComponentFromWithAuthenticate  state={this.state} filter ={this.filter}  updating={this.updatedPosts}/>
      </div>
    )
  }

}


export default App;