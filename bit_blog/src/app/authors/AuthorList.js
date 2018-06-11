import React, { Component } from 'react';
import { AuthorItem } from './AuthorItem.js';
import { getUsers } from '../../services/userService';


export class AuthorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            loading: true
        }
    }

    componentDidMount = () => {
        getUsers()
          .then(authors => {
            this.setState({authors, loading: false});
          })
    }

    renderUserList = users => {
        const { authors, loading} = this.state
        if (loading) {
            return <div className='loading'></div>
        } else {
            return authors.map(user => <AuthorItem author={user} key={user.id} />)
        }
    }

    renderNumOfAuthorsMsg = () => {
        const {loading, authors} = this.state;
        if (loading) {
            return <p>...</p>
        } else {
            return <h3 className="center blue-grey-text text-darken-1">Authors ({authors.length})</h3>
        }
    }
    



    render() {
        return (
            <div className="container main-content">
                {this.renderNumOfAuthorsMsg()}
                <div className="row">
                  {this.renderUserList()}
                </div>
            </div>
        )

    }
}
