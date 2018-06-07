import React from 'react';
import { UserItem } from './UserItem';
import { UserCard } from './UserCard';

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        }

    }

    onChangeHandler = event => {
        const newValue =  event.target.value;

        this.setState({
            inputValue: newValue
        })
        
        this.props.filterUsers(newValue);
    }

    render(){

        let usersData;
        if(this.props.noFilterResults) {
            usersData = [];
        } else {
            usersData = (this.props.filteredUsers.length === 0) ? this.props.users : this.props.filteredUsers;
        }
        const userItems = usersData.map((user, i) => <UserItem userData={user} key={i} />);
        const userCards = usersData.map((user, i) => <UserCard userData={user} key={i} />);
        

        return (
            <div className="container main-content">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix icon">search</i>
                                <textarea 
                                    id="icon_prefix2" 
                                    value={this.state.inputValue} 
                                    className="materialize-textarea" 
                                    placeholder="Search"
                                    onChange={this.onChangeHandler}></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    {this.props.view === "view_module" ? userItems : userCards}
                </div>
            </div>
        )

    }
}