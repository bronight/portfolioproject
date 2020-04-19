import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
  } from "reactstrap";
  import { Link } from "react-router-dom";


  function Footer(props) {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-2 offset-1">
              <h5>Your apps</h5>
              <ul className="list-unstyled">
                <li><Link to='/calendar'>Calendar</Link></li>
              </ul>
            </div>
            <div className="col-6 col-sm-3 text-center">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/team'>Team</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;