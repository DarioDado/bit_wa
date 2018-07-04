import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { COLORS } from '../constants';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: [],
      numberOfFields: 16
    }
  }

  shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
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





  createFields = () => {
    
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Fragment>
      
    );
  }
}

export default App;
