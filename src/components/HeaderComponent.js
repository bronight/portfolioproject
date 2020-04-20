import React, { Component } from "react";
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label
  } from "reactstrap";
  import { NavLink } from "react-router-dom";
  import logo from '../images/logo.png';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false
      };

  this.toggleNav = this.toggleNav.bind(this);
  this.toggleModal = this.toggleModal.bind(this);
}

toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }
    render() {
        return (
            <React.Fragment>
                <Navbar light sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src={logo}
                height="50"
                alt="Momo Deux Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/calendar">
                                        Calendar
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/todolist">
                                        To-do list
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/shoppinglist">
                                        Shopping list
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" /> Login
                                </Button>
                            </span>
                        </Collapse> 
          </div>
        </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default Header;