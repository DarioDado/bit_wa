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
        usersData = (this.props.filteredUsers.length === 0) ? this.props.users : this.props.filteredUsers;
        
        const userItems = usersData.map((user, i) => <UserItem userData={user} key={i} />);
        const userCards = usersData.map((user, i) => <UserCard userData={user} key={i} />);
        
        const users = this.props.noFilterResults
            ?   <div className="no-result">
                    <p><i className="material-icons no-result-icon">sentiment_neutral</i></p>
                    <p className="no-result-msg">We couldn't find any people matching your search</p>
                </div>
            : (this.props.view === "view_module" ? userItems : userCards)

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
                    {users}
                </div>
            </div>
        )

    }
}