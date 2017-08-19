import React, { Component } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
	return (
	  <div>
      	<div className="myJumbo">
	        <Container fluid>
	          <h1 className="display-3">Stillwaters Farm</h1>
	          <h2 className="lead">Achieving Harmony between Horse and Rider</h2>
	        </Container>
        </div>
    </div>
	);
  }
}

export default Home;