import React from 'react';
import { UserItem } from './UserItem';
import { UserCard } from './UserCard';

export const UserList = props => {
    const userItems = props.users.map((user, i) => <UserItem userData={user} key={i} />);
    const userCards = props.users.map((user, i) => <UserCard userData={user} key={i} />);
    
    return (
        <div className="container">
            <div className="row">
                {props.view === "view_module" ? userItems : userCards}
            </div>
        </div>
    )
}