import React, { Component } from 'react';
import { getUsers } from './../../services/userService';
import { UserItem } from './UserItem';
import { UserCard } from './UserCard';

export class UserList extends Component {
    constructor(props) {
        super(props);

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
        let userItems;
        if (this.props.view === "view_module") {
            userItems = this.state.users.map(user => <UserItem userData={user} key={user.getId()} />);
        } else if (this.props.view === "view_list") {
            userItems = this.state.users.map(user => <UserCard userData={user} key={user.getId()} />);
        }
        return (
            <div className="container">
                <div className="row">
                    {userItems}
                </div>
            </div>
        )
    }
}