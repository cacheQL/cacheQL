import React from 'react';
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



const TopNavbar = () => {

    return ( 

    <div> 
      <Navbar bg="light" expand="lg">
      <img src="/assets/logo_transparent_2.png" width="100" height="80" href="#home" alt="logo" class="d-inline-block align-top"/>
      {/* <Navbar.Brand href="#home">CacheQL</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Form inline>
        <a href="https://github.com" target="_blank">
          <FontAwesomeIcon id="github-icon" icon={faGithub}  size="3x"/> 
        </a>
        </Form>
      </Navbar.Collapse>
    </Navbar> 
    </div>
    );
}

export default TopNavbar;