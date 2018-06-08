import React from 'react';
import { UserItem } from './UserItem';
import { UserCard } from './UserCard';
import { getGenderStats } from '../../services/userService';
import './UserList.css';

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        }
    }

    onChangeHandler = event => {
         this.setState({
            inputValue: event.target.value
        });
    }

    renderUsers = (users) => {
        const { gridLayout } = this.props;

        return users.map((user, i) => (
            gridLayout 
                ? <UserCard userData={user} key={i} />
                : <UserItem userData={user} key={i} />
        ))
    }
    
    renderNoResults = () => (
        <div className="no-result">
            <p><i className="material-icons no-result-icon">sentiment_neutral</i></p>
            <p className="no-result-msg">We couldn't find any people matching your search</p>
        </div>
    );

    renderStats = (users, stats) => {
        return users.length
            ? (<div className="col s12 stats">
                <p>Male: {stats.male} Female: {stats.female}</p>
            </div>)
            : null
    } 

    render(){
        const { inputValue } = this.state;
        
        const users = this.props.users
        .filter((user) => user.getFullName().toLowerCase().includes(inputValue.toLowerCase()))
        
        const stats = getGenderStats(users);

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
                    {this.renderStats(users, stats)}
                    
                    { 
                        users.length
                            ? this.renderUsers(users)
                            : this.renderNoResults()
                    }
                </div>
            </div>
        )

    }
}