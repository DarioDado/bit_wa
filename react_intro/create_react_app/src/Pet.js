import React, { Component } from 'react';
import HobbyList from './HobbyList';
import './Pet.css';
class Pet extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="name">Ceda</h2>
                <img src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/167545_106438086097663_7434323_n.jpg?_nc_cat=0&oh=099ec9f5885f3e0d5b2c618f0b561e71&oe=5BC4391B" alt="Ceda image" />
                <h5 style={{ fontSize: '2em', margin: '2px' }}>Hobbies:</h5>
                <HobbyList />
            </div>
        );
    }
}

export default Pet;