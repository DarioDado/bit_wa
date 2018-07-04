import React from 'react';
import './Header.css';


export const Header = props => {
    return (
        <header>
            <div className="logo">
                <h3>Memory Game</h3>
            </div>
            <div className="main-menu">
                <p className="new-game">New Game</p>
                <p className="highcores">Highscores</p>
            </div>
        </header>
    )
}