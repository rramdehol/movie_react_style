// *********React Stuff**********
import React, { Component } from 'react';
import {Link} from "react-router";

class Poster extends Component{
	render(){
		// console.log(this);
		var imagePath =  "http://image.tmdb.org/t/p/w300" + this.props.poster.poster_path;
		var posterLink = "/movie/"+this.props.poster.id;
		// NO LOGIC IN THE VIEW
		return(
			<div className= "col-sm-6 col-md-3">
				<Link to={posterLink}><img src={imagePath}/></Link>
			</div>
		)
	}
}

export default Poster;