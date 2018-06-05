import React, { Component } from 'react';
import { getUsers } from './../../services/userService';
import { UserItem } from './UserItem';
import { UserCard } from './UserCard';

export class UserList extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }
    setUsers(users) {
        this.setState({ users });
    }
    componentDidMount() {
        getUsers()
            .then(users => {
                this.setUsers(users);
            })
    }
    render() {
        const userItems = this.state.users.map(user => <UserCard userData={user} key={user.getId()} />)
        return (
            <div className="container">
                <div className="row">
                    {userItems}
                </div>
            </div>
        )
    }
}