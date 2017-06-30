import React, { Component } from 'react';
import logo from '../../media/logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Layout/Home';
import Root from '../Layout/Root';
import About from '../Pages/About';


class App extends Component {
  render() {
	return (
	  <div>
	  	<Router>
	  		<Root>
	  			<Switch>
	  				<Route exact path="/" component={Home} />
	  				<Route exact path="/about" component={About} />
	  			</Switch>
	  		</Root>
	  	</Router>
	  </div>
	);
  }
}

export default App;
