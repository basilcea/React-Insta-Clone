import React, {Component} from 'react';
import Postpage from './components/PostContainer/postPage';
import Loginpage from './components/Login/login';
import withAuthenticate  from './components/authentication/authenticate';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import { faHeart , faComment, faCompass , faUser, faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faInstagram , faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faSearch,faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

library.add(
    faHeart,faComment,faCompass,faUser,faInstagram, faSearch, faBookmark ,faExternalLinkAlt ,faFacebookSquare
) 
const ComponentFromWithAuthenticate = withAuthenticate(Postpage)(Loginpage);
class App extends Component{
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