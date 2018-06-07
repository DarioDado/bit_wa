import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
    const { title, changeView, view, refreshUsers, displayButtons } = props;

    
    const changeViewHandler = e => {
        e.preventDefault();
        changeView(view);
    }
    
    const refreshUsersHandler = e => {
        e.preventDefault();
        refreshUsers();
    }

    const buttons = displayButtons
        ? <ul className="right hide-on-med-and-down">
            <li><Link to='/about'>About</Link></li>
            <li><a href="#!" onClick={refreshUsersHandler}><i className="material-icons">refresh</i></a></li>
            <li><a href="#!" onClick={changeViewHandler}><i className="material-icons">{view}</i></a></li>
        </ul>
        : null;

        
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to='/home'><span className="brand-logo center">{title}</span></Link>
                {buttons}
            </div>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
Header.defaultProps = {
    title: "Bit Persons"
}

export default Header;