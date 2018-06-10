import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
      <nav className="light-blue darken-2">
        <div className="nav-wrapper container">
          <Link to='/home'><span href="#!" className="brand-logo">RND BLG</span></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/home'><span>Home</span></Link></li>
            <li><Link to='/authors'><span>Authors</span></Link></li>
            <li><Link to='/about'><span>About</span></Link></li>
          </ul>
        </div>
      </nav>
    )
}


export default Header;
