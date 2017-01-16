// *********React Stuff**********
import React, { Component } from 'react';
// *******Custom Modules/Components***********
import "./App.css";

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			moviePosters:[],
		}
	}
	render(){
		return(
			<h1>
				This is Home!
			</h1>
		)
	}
}