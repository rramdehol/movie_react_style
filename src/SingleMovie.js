// *********React Stuff**********
import React, { Component } from 'react';

class SingleMovie extends Component{
	render(){
		console.log(this);
		var imagePath =  "http://image.tmdb.org/t/p/w300" + this.props.poster.poster_path;
		// NO LOGIC IN THE VIEW
		return(
			<img src={imagePath}></img>
		)
	}
}

export default SingleMovie;