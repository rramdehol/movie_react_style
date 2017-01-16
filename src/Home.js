// *********React Stuff**********
import React, { Component } from 'react';
import $ from "jquery";
// *******Custom Modules/Components***********
import "./App.css";
import Poster from "./Poster";
import Constants from "./Constants";
import Config from "./Config"

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			moviePosters:[],
		}
	}
	// Place for an AJAX request after component mounted
  // As soon as the component mount and updates the state and rerenders
	componentDidMount() {
	    var url = Constants.baseUrl + Constants.nowPlayingEP+ Config.api_key;
	    $.getJSON(url, (movieData)=>{
	      // console.log(movieData);
	      this.setState({
	        moviePosters: movieData.results
	      });
	    });
	}
	render(){
		var postersArray =[];
    	// console.log(this);
    	this.state.moviePosters.map((poster, index)=>{
      		return postersArray.push(<Poster poster={poster} key={index}/>)
    	});
		return(
			<div>
				<h1>This is Home</h1>
				{postersArray}
			</div>
		)
	}
}
export default Home;