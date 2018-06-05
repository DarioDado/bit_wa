import React from 'react';

export const UserItem = props => {
    const user = props.userData;
    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-image card-img-wrapper">
                    <img id="img" alt="profile img" src={user.avatar.thumbnail} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{user.getFullName()}</p>
                        <p><i className="material-icons icon">email</i>email: {user.hideEmail()}</p>
                        <p><i className="material-icons icon">cake</i>date of birth: {user.getFormatedDate()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
