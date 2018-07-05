import React from 'react';
import './LevelMenu.css';

export const LevelMenu = props => {

    return (
        <div className="level-options">
            <p  onClick={props.onChangeLevel} className="level-option">Easy</p>
            <p  onClick={props.onChangeLevel} className="level-option">Medium</p>
            <p  onClick={props.onChangeLevel} className="level-option">Hard</p>
        </div>
    )
}