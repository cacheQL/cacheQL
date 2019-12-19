import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Link as LinkScroll, animateScroll } from "react-scroll";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { relative } from "path";

let navStyle = {
  width: "30%",
  position: relative
};

const TopNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <img
          src="/assets/logo_transparent_2.png"
          width="90"
          height="80"
          href="#home"
          alt="logo"
          className="d-inline-block align-top"
        />
        {/* <Navbar.Brand href="#home">CacheQL</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={navStyle}>
            <div className="navItems">
              <LinkScroll to="github-icon" smooth={true} offset={-64}>
                Home
              </LinkScroll>
              <LinkScroll to="query-container" smooth={true} offset={-64}>
                Demo
              </LinkScroll>
              <LinkScroll to="download" smooth={true} offset={-64}>
                Download
              </LinkScroll>
              <LinkScroll to="TeamBox" smooth={true} offset={-64}>
                Team
              </LinkScroll>
            </div>
          </Nav>
          <Form inline>
            <a href="https://github.com/cacheql/cacheql" target="_blank">
              <FontAwesomeIcon id="github-icon" icon={faGithub} size="3x" />
            </a>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
