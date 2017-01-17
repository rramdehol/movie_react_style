// *********React Stuff**********
import React, { Component } from 'react';
import $ from "jquery";
// *******Custom Modules/Components***********
import "./App.css";
import Poster from "./Poster";
import Constants from "./Constants";
import Config from "./Config"
import DiscoverButton from "./DiscoverButton"

class Home extends Component{
	constructor(props) {
		super(props);
		// The this of the handleCategoryChange method is set equal 
		// the this of the class object by binding the class this to the 
		// the handleCategoryChange this
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
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
	// Custom function to update homes state var from the child button
	handleCategoryChange(categoryApiUrl){
		var url = Constants.baseUrl + categoryApiUrl +Config.api_key;
		console.log(url);
		$.getJSON(url,(categoryData)=>{
			this.setState({
				moviePosters: categoryData.results
			})
		})
	}

	render(){
		var postersArray =[];
    	// console.log(this);
    	this.state.moviePosters.map((poster, index)=>{
      		return postersArray.push(<Poster poster={poster} key={index}/>)
    	});
    	// BUild buttons with discover button componentx
    	var discoverButtons =[];
    	Constants.discoverLinks.map((category, index)=>{
    		discoverButtons.push(<DiscoverButton buttonLink={category.link} buttonText={category.buttonText} key={index} functionFromParent={this.handleCategoryChange}/>)
    	});
		return(
			<div>
				<div>
					<h1>This is Home</h1>
					{discoverButtons}
				</div>
				{postersArray}
			</div>
		)
	}
}
export default Home;