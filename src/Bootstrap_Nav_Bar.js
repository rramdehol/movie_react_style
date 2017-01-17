import React, { Component } from 'react';
import { Link } from 'react-router';

class BootStrapNavBar extends Component{
	constructor(props) {
		super(props);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}
	handleSearchSubmit(event){
		event.preventDefault();
		var inputBox = event.target[0].value;
		console.dir(inputBox);
		console.dir(this);
		this.props.functionFromParent(inputBox);
	}
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
						<li>
							<form onSubmit={this.handleSearchSubmit}>
								<input type="text"/>
								<button type="submit" className= "btn btn-success">
									"Search for Movie"
								</button>
							</form>
						</li>
					</ul>
				</div>
			</nav>
		)		
	}
}

export default BootStrapNavBar;