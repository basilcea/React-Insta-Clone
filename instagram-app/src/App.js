import React, {Component} from 'react';
import Post from './components/PostContainer/post';
import SearchBar from './components/SearchBar/searchBar';
import './App.css';
import dummyData from './dummy-data' 

class App extends Component{
  
  render(){
    return(
      <div>
        <SearchBar />
        {
          dummyData.map(data => <Post key={data.id}  post={data}/>)
        }
      </div>
    )
  }

}

export default App;
