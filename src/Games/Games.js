import React, { Component } from 'react';
import CSGO from './pictures/CSGO.jpg';
import DOTA from './pictures/DOTA.jpg';
import PUBG from './pictures/PUBG.jpg';
import SIEGE from './pictures/SIX.jpg';
import './Games.css';
      class Game extends Component{
          state = {
          showPicture: false
          }
        puru=()=>{
            const show = this.state.showPicture;
            this.setState({showPicture: !show});
        }
      render(){
    return(
          

         <div className="flex-container">
            <div className="card">
        <img src={CSGO} alt="CSGO" className="pic"/>
       <button className="button button2">Play</button>
       <button onClick={this.puru} className="button button1">Learn More</button>
       {this.state.showPicture === true ?
       <div>
          <p>CSGO is one of the best Game of all time. It was the most played game in last year. It is so popular among boys and it is now still getting played.People love it</p>

           </div> :null
        }
         </div>
         <div className="card">
        <img src={DOTA} alt="DOTA" className="pic"/>
       <button className="button button2">Play</button>
       <button className="button button1">Learn More</button>
         </div>
        <div className="card">
        <img src={PUBG} alt="PUBG" className="pic"/>
       <button className="button button2">Play</button>
       <button className="button button1">Learn More</button>
         </div>
       <div className="card">
        <img src={SIEGE} alt="SIEGE" className="pic"/>
       <button className="button button2">Play</button>
       <button className="button button1">Learn More</button>
         </div>
         </div>
    );
}
}
export default Game;
    
    