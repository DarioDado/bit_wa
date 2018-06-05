import React from "react";
import PropTypes from "prop-types"

const Header = (props) => {
    const { title } = props;
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">{title}</a>
                <ul className="right hide-on-med-and-down">
                    {/* <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                    <li><a href="badges.html"><i className="material-icons">view_module</i></a></li> */}
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