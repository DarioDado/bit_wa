import React from "react";
import PropTypes from "prop-types"

const Header = (props) => {
    const { title, changeView, view, refreshUsers } = props;
    const changeViewHandler = e => {
        e.preventDefault();
        changeView(view);
    }

    const refreshUsersHandler = e => {
        e.preventDefault();
        refreshUsers();
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">{title}</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#!" onClick={refreshUsersHandler}><i className="material-icons">refresh</i></a></li>
                    <li><a href="#!" onClick={changeViewHandler}><i className="material-icons">{view}</i></a></li>
                </ul>
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