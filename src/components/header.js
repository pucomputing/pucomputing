import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
          <img
          alt=""
          src="/static/img/logo/horizontal-white.png"
          width="150"
          height="30"
          className="d-inline-block align-top"
          />
          {/* {' PUComputing'} */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
          {/* <Nav>
          <Nav.Link href="/">Misc</Nav.Link>
          </Nav> */}
      </Navbar.Collapse>
  </Navbar>
);

export default Header;
