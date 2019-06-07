import React from "react";
import "../../App.css";
import Post from "./postContainer";
import SearchBar from "../SearchBar/searchBar";
import dummyData from '../../dummy-data' ;

class PostPage extends React.Component{
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
  const style = { display: this.state.filtered ? "block" : "none"};
  return (
    <div>
      <SearchBar searchHandler={this.filter} />
      <div className="App-section">
        <div style={style}><p>{this.state.length}</p></div>
        {this.state.posts.map(post => (
          <Post key={post.id}  post={post} update={this.updatePost} />
        ))}
      </div>
    </div>
  );
};
}
export default PostPage;
