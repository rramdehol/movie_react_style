// *********React Stuff**********
import React, { Component } from 'react';
// Import link component from React Router
import {Link} from "react-router";

class BootstrapNavBar extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<nav className="navbar navbar-default">
  				<div className="container-fluid">
    				<div className="navbar-header">
     					 <a className="navbar-brand" href="#">WebSiteName</a>
    				</div>
    				<ul className="nav navbar-nav">
      					<li><Link to="/">Home</Link></li>
      					<li><Link to="/nowPlaying"> Now Playing</Link></li>
      					<li><Link to="/topRated"> Top Rated</Link></li>
    				</ul>
  				</div>
			</nav>
		)
	}
}

export default BootstrapNavBar;