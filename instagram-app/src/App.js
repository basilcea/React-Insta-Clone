import React, {Component} from 'react';
import Post from './components/PostContainer/post';
import SearchBar from './components/SearchBar/searchBar';
import './App.css';
import dummyData from './dummy-data' ;
import {library} from '@fortawesome/fontawesome-svg-core'
import { faHeart , faComment, faCompass , faUser} from "@fortawesome/free-regular-svg-icons";
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(
    faHeart,faComment,faCompass,faUser,faInstagram, faSearch
)

class App extends Component{
  
  render(){
    return(
      <div className ='App-container'>
        <SearchBar />
        <div className='App-block'></div>
        {
          dummyData.map(data => <Post key={data.id}  post={data}/>)
        }
      </div>
    )
  }

}

export default App;
