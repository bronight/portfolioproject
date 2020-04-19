import React, { Component } from "react";
import {
    Jumbotron,
  } from "reactstrap";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <h1>Mom Deux</h1>
                        <h2>Your tasks made easier</h2>
                    </div>
                    </div>
                </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header;