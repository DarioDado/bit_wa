import React from 'react';
import './Header.css';


export const Header = props => {
    return (
        <header>
            <div className="logo">
                <h3>Color Memory Game</h3>
            </div>
            <div className="main-menu">
                <p className="new-game" onClick={props.onNewGame}>New Game</p>
            </div>
        </header>
    )
}