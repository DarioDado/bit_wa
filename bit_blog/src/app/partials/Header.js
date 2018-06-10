import React from "react";
import "./Header.css";

const Header = (props) => {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">RND BLG</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Authors</a></li>
            <li><a href="#!">About</a></li>
          </ul>
        </div>
      </nav>
    )
}


export default Header;
