import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
	return (
	  <div className="navContainer">
                    <Link to="/">
                    <div className="home">Home
                    </div>
                    </Link>
                    <Link to="/about">
                    <div className="navItem">
                        <div className="navLink">About</div>
                    </div>
                    </Link>

                </div>
	);
  }
}

export default Header;