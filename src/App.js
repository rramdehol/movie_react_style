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
  constructor(props) {
    super(props);
    this.state=({
      searchText:"",
    })
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(searchTextFromChild){
    this.setState({
      searchText: searchTextFromChild
    })
    this.props.router.push("/search/" + encodeURI(searchTextFromChild));
  }
  componentDidMount() {
    // console.log(this.props.route);
  }
  // Load up the moviePosters array with Poster Components
  render() {
    console.log(this.props.children);
    // console.log(this.props.children);
    return (
      <div className="container">
        <div className="row">
          <BootStrapNavBar functionFromParent={this.handleSearch}/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
