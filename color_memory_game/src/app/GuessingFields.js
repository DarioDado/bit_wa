import React from 'react';
import './GuessingFields.css';


export const GuessingFields = props => {


    const renderImg = (show) => {
        return !show 
            ? <img  className="field-img" src="https://image.freepik.com/free-icon/white-question-mark-on-a-black-circular-background_318-35996.jpg" alt="question mark" />
            : null
    }

    const renderFields = () => {
        const {fields, onGuess} = props;
        return fields.map((field,i) => (
            <div className="field" onClick={onGuess} id={i} key={i} style={{backgroundColor: field.color}}>
                {renderImg(field.show)}
            </div>
        ));
    }

    return (
        <div className="field-container">
            {renderFields()}
        </div>
    )
}