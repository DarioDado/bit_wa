import React from 'react';
import PropTypes from "prop-types"

export const UserCard = props => {
    if (!props.userData) {
        return null;
    }
    const user = props.userData;
    console.log("card");
    return (
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={user.avatar.large} alt="user"/>
                    <span className="card-title">{user.firstName}</span>
                </div>
                <div className="card-content">
                    <p>{user.hideEmail()}</p>
                    <p>Birth date: {user.getFormatedDate()}</p>
                </div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    userData: PropTypes.object.isRequired
}

UserCard.defaultProps = {
    userData: null
}