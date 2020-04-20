import React from "react";
import { Link } from "react-router-dom";


  function Footer(props) {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-4 text-left">
              <h5>Welcome to Mom Deux!</h5>
              <h6>Mom Deux is an app that lets you organize your family's tasks easily.</h6>

            </div>
            <div className="col-4 text-center">
              <h5>Your apps</h5>
              <ul className="list-unstyled">
                <li><Link to='/calendar'>Calendar</Link></li>
                <li><Link to='/todo-list'>To-do list</Link></li>
                <li><Link to='/shopping-list'>Shopping list</Link></li>
              </ul>
            </div>
            <div className="col-4 text-center">
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