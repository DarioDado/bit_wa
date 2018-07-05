import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Home } from './Home';
import { COLORS } from '../constants';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: [],
      numberOfFields: 16,
      guessIds: [],
      numberOfAttempts: 0,
      gameOver: false
    }
  }

  isFinished = () => {
    return this.state.fields.every(field => field.show);
  }

  handleChangeLevel = e => {
    const level = e.target.textContent;
    let numberOfFields;
    if (level === "Easy") {
      numberOfFields = 8;
    } else if (level === "Medium") {
      numberOfFields = 16;
    } else {
      numberOfFields = 32;
    }
    this.setState({numberOfFields},() => {
      this.loadNewGame();
    })
  }

  loadNewGame = () => {
    const colors = this.getRandColors();
    const fields = colors.map(color => {
      return {color, show: false}
    })
    const guessIds = [];
    const numberOfAttempts = 0;
    const gameOver = false;
    this.setState({fields, guessIds, numberOfAttempts, gameOver});
  }

  handleGuess = e => {
    const guessId = Number(e.target.parentNode.id);

    if (this.state.guessIds.length >= 2 || this.state.gameOver) {
      return
    }
    const guessIds = [...this.state.guessIds, guessId];
    const numberOfAttempts = this.state.numberOfAttempts + 1;
    let fields = this.state.fields.map((field,i) => {
      if (i === guessId) {
        return {...field, show: true}
      }
      return field;
    })
    this.setState({guessIds, fields, numberOfAttempts}, ()=>{
      if (guessIds.length === 2) {
        if (fields[guessIds[0]].color !== fields[guessIds[1]].color) {
          setTimeout(() => {
            const newFields = this.state.fields.map((field,i) => {
              if (i === this.state.guessIds[0] || i === this.state.guessIds[1]) {
                return {...field, show: false}
              }
              return field;
            });
            const newGuessIds = [];
            this.setState({fields: newFields, guessIds: newGuessIds});
          }, 500)
        } else {
          const gameOver = this.isFinished();
          const newGuessIds = [];
          this.setState({guessIds: newGuessIds, gameOver});
        }
      }
    });
    
  }

  //Durstenfeld shuffle algorithm
  shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  getRandColors = () => {
    const {numberOfFields} = this.state;
    let colors = [...COLORS];
    let randColors = [];
    for (let i=0; i<numberOfFields/2; i++) {
      let randIndex = Math.floor(Math.random()*colors.length);
      randColors.push(colors[randIndex]);
      colors.splice(randIndex,1);
    }
    return this.shuffleArray([...randColors, ...randColors]);
  }

  componentDidMount = () => {
    const colors = this.getRandColors();
    const fields = colors.map(color => {
      return {color, show: false}
    })
    this.setState({fields});
  }


  render() {
    return (
      <Fragment>
        <Header onNewGame={this.loadNewGame}/>
        <Home 
          onChangeLevel={this.handleChangeLevel} 
          onGuess={this.handleGuess} 
          fields={this.state.fields}
          numberOfAttempts={this.state.numberOfAttempts}
          gameOver={this.state.gameOver}/>
      </Fragment>
      
    );
  }
}

export default App;
