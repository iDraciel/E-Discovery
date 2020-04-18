import React, { Component } from 'react';
import './App.css';
import Game from './Games/Games.js';
import GamePage from './components/GamePage/GamePage';

class App extends Component{

render(){
  return (
    <div>

      <div className="App"> 
        {/*
          This should be the pattern
          <navbar/>
          <Routing>
          <Footer>
        */}
         <GamePage/> 
      </div>
    </div>
  
    
  );

}

}

export default App;
