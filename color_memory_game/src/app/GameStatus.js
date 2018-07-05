import React from 'react';
import './GameStatus.css';

export const GameStatus = props => {

    const renderMsg = () => {
        return props.gameOver
            ? <p  className="attempts-msg">{"Score: "}<span className="number">{props.numberOfAttempts}</span></p>
            : <p  className="attempts-msg">{"Number of Clicks: "}<span className="number">{props.numberOfAttempts}</span></p>
    }

    return (
        <div className="attempts-status">
            {renderMsg()}
        </div>
    )
}