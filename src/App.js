// *********React Stuff**********
import React, { Component } from 'react';
import $ from "jquery";
// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap-theme.min.css";
// Import logo from file
import logo from './logo.svg';
// *******Custom Modules/Components***********
import Poster from "./Poster"
import BootStrapNavBar from "./Bootstrap_Nav_Bar"
// ********Custom CSS************
import './App.css';


class App extends Component {
  // Intialize State
  constructor(props) {
    super(props);
    this.state ={
      moviePosters:[],
    }
  }
  // Place for an AJAX request after component mounted
  // As soon as the component mount and updates the state and rerenders
  componentDidMount() {
    var url="https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5"
    $.getJSON(url, (movieData)=>{
      // console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      });
    });
  }
  // Load up the moviePosters array with Poster Components
  render() {
    var postersArray =[];
    console.log(this);
    this.state.moviePosters.map((poster, index)=>{
      return postersArray.push(<Poster poster={poster} key={index}/>)
    })
    console.log(this.props.children);
    return (
      <div className="container">
        <div className="row">
          {this.props.children}
          <BootStrapNavBar/>
          <h1>Your Posters Here!</h1>
          {postersArray}
        </div>
      </div>
    );
  }
}

export default App;
