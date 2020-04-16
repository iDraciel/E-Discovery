import React, { Component } from 'react';
import './App.css';
import Game from './Games/Games.js';

class App extends Component{

render(){
  return (
    <div className="App">
       <h1> Top E-Sports Games</h1>
         <Game />
</div>
    
  );

}

}

export default App;
