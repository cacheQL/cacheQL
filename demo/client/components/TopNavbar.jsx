import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TopNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
<<<<<<< HEAD
        <img
          src="/assets/logo_transparent_2.png"
          width="100"
          height="80"
          href="#home"
          alt="logo"
          className="d-inline-block align-top"
        />
        {/* <Navbar.Brand href="#home">CacheQL</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Team">Demo</Nav.Link>
            <Nav.Link href="#Team">Download</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
          </Nav>
          <Form inline>
            <a href="https://github.com" target="_blank">
              <FontAwesomeIcon id="github-icon" icon={faGithub} size="3x" />
            </a>
          </Form>
        </Navbar.Collapse>
      </Navbar>
=======
      <img src="/assets/logo_transparent_2.png" width="90" height="80" href="#home" alt="logo" class="d-inline-block align-top"/>
      {/* <Navbar.Brand href="#home">CacheQL</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Team">Demo</Nav.Link>
          <Nav.Link href="#Team">Download</Nav.Link>
          <Nav.Link href="#Team">Team</Nav.Link>
        </Nav>
        <Form inline>
        <a href="https://github.com" target="_blank">
          <FontAwesomeIcon id="github-icon" icon={faGithub}  size="3x"/> 
        </a>
        </Form>
      </Navbar.Collapse>
    </Navbar> 
>>>>>>> dece1821a7e17a5aebc45e2f2f93b724b7fba699
    </div>
  );
};

export default TopNavbar;
