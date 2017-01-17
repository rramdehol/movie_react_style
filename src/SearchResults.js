// *********React Stuff**********
import React, { Component } from 'react';
import {Link} from "react-router";
import Constants from "./Constants"

class SearchResults extends Component{
	render(){
		console.log(this);
		var imagePath =  Constants.imageBase;
		var posterLink = "/movie/"+this.props.poster.id;
		// NO LOGIC IN THE VIEW
		return(
			<div className= "col-sm-6 col-md-3">
				<Link to={posterLink}><img src={imagePath}/></Link>
			</div>
		)
	}
}

export default SearchResults;