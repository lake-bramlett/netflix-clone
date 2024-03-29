import React from 'react';
import { Nav, Button, Navbar } from 'react-bootstrap'
import Signin from './Signin'
import SiteLogo from './SiteLogo';

function UserNav(){

  var myStyle = {
    background: "none"
  }

  return (
    <Navbar style={myStyle} expand="lg">
      <Navbar.Brand href="#home"><SiteLogo/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Signin />
      </Navbar.Collapse>
    </Navbar>

  );
}

export default UserNav;
