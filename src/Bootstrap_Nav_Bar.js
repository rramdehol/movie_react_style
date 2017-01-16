import React, { Component } from 'react';
import { Link } from 'react-router';

class BootStrapNavBar extends Component{
	render(){
		return(
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">WebSiteName</a>
					</div>
					<ul className="nav navbar-nav">
						<li className="active">
                            <Link to="/">Home</Link>
                        </li>
						<li><Link to="/nowPlaying">Now Playing</Link></li>
						<li><Link to="/topRated">Top Rated</Link></li>
					</ul>
				</div>
			</nav>
		)		
	}
}

export default BootStrapNavBar;