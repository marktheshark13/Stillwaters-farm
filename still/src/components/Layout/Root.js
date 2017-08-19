import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from './Footer';
import Header from './Header';
import './Root.css';

class Root extends Component {
  render() {
	return (
	  <div>
	  	<Header/>
		  	<Container fluid>
	  			{this.props.children}
		  	</Container>
	  	<Footer/>
	  </div>
	);
  }
}

export default Root;