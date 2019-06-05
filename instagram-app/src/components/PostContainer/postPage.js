import React from "react";
import "./post.css";
import Post from "./post";
import SearchBar from "../SearchBar/searchBar";

const postPage = ({state, filter ,updating}) => {
  const style = {
    display: state.filtered ? "block" : "none"
  };
  return (
    <div>
      <SearchBar searchHandler={filter} />
      <div className="App-section">
        <div className="App-block"></div>
        <div style={style}><p>{state.length}</p></div>
        {state.posts.map(post => (
          <Post key={post.id}  post={post} update={updating} />
        ))}
      </div>
    </div>
  );
};
export default postPage;
