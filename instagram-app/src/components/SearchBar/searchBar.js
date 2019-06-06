import React from "react";
// import "./searchBar.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 3%;

`;
const LogoHeader = styled.div`
  display: flex;
  width: 65%;
  justify-content: flex-start;
  align-items: center;
  height:5vh;
  @media (min-width: 500px) {
    width: 40%;
  }
  h1{
    font-family: 'Rochester',cursive;
    font-weight: bold;
    display:flex;
    align-items:flex-start;
    padding:0;
    font-size:2rem;
    @media (min-width:800px){
        font-size:3rem;
    }
    span{
      padding-right:10px;
      font-family:Arial, Helvetica, sans-serif;
      font-size:1em;
      font-weight:normal;
      padding-top:5%;
    }
  }
`;
const LogoImage = styled.div`
  font-size: 2rem;
  margin-top: 1%;
  margin-right: 5%;
  margin-left: 5%;
  @media (min-width: 500px) {
    font-size: 2.5rem;
  }
  @media (min-width: 800px) {
    font-size: 3rem;
  }
`;
const Form = styled.form`
   display:none;
    border:1px solid grey;
    width:40%;
    margin:0% 5%;
    background-color: gainsboro;
    border-radius:5px;
    justify-content:space-between;
    align-items:center;
    height:5.5vh;
    flex-direction:row;
    input[type='search']{
    border:none;
    outline:none;
    font-size:1em;
    height:5.5vh;
    background-color: gainsboro;
    padding:0%;
    width:60%;
}
    @media (min-width:500px){
        display:flex;
       
        
    }
`;
const Search = styled.div`
    font-size:1em;
    height:5.5vh;
    color:grey;
    display:flex;
    align-items:center;
    text-align:center;
    margin-left:30%;
      @media (max-width:800px){
        display:flex;
        width:20%;
        margin-left:5%
      }
`;
const Socials= styled.div`
  display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:35%;
    font-size:1.5rem;

`;
const SearchBar = ({ searchHandler }) => {
  return (
    <Header>
      <LogoHeader>
        <LogoImage> <FontAwesomeIcon icon={["fab", "instagram"]} /></LogoImage>
        <h1><span> | </span> Instagram</h1>
      </LogoHeader>
      <Form>
      <Search>
      <FontAwesomeIcon  icon="search" />
      </Search>
        <input
          className="searchBox"
          type="search"
          onChange={e => searchHandler(e)}
          placeholder={"Search"}
        />
      </Form>
      <Socials>
        <FontAwesomeIcon icon={["far", "compass"]} />
        <FontAwesomeIcon icon={["far", "heart"]} />
        <FontAwesomeIcon icon={["far", "user"]} />
      </Socials>
    </Header>
  );
};

SearchBar.propTypes = {
  searchHandler: PropTypes.func
};
export default SearchBar;
