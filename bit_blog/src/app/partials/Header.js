import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
      <nav className="light-blue darken-2">
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">RND BLG</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/home'><span href="#!">Home</span></Link></li>
            <li><Link to='/authors'><span href="#!">Authors</span></Link></li>
            <li><Link to='/'><span href="#!">About</span></Link></li>
          </ul>
        </div>
      </nav>
    )
}


export default Header;
