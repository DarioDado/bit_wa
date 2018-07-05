import React, { Fragment } from 'react';
import './Home.css';
import { GuessingFields } from './GuessingFields';
import { LevelMenu } from './LevelMenu';
import { GameStatus } from './GameStatus';

export const Home = props => {
    

    return (
        <Fragment>
            <LevelMenu onChangeLevel={props.onChangeLevel}/>
            <GuessingFields onGuess={props.onGuess} fields={props.fields} />
            <GameStatus numberOfAttempts={props.numberOfAttempts} gameOver={props.gameOver} />
        </Fragment>
    )
}