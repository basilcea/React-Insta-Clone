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
  this.setState({
    posts:dummyData
  })
}

updatePost= id =>{
 //const newPostsArray = Object.assign([],this.state.posts)
 const newPostsArray = this.state.posts

 

 const selectedPost = newPostsArray.filter(post => post.id === id)
 console.log(selectedPost , id, newPostsArray )


}
  render(){
    console.log(this.state.posts)
    return(
      <div className ='App-container'>
        <SearchBar />
        <div className='App-section'>
        <div className='App-block'></div>
        {
          dummyData.map(data => <Post key={data.id} id={data.id}  post={data}  update={this.updatePost}/>)
        }
        </div>
      </div>
    )
  }

}

export default App;
