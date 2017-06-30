import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Footer from './Footer';
import Header from './Header';

class Root extends Component {
  render() {
	return (
	  <div>
	  	<Header/>
	  		<Container>
	  			<h1>This is a container test</h1>
	  			{this.props.children}
	  		</Container>
	  	<Footer/>
	  </div>
	);
  }
}

export default Root;