import React from 'react';
import './GamePage.css';
import PubG from '../../assets/pubg.jpg';
import facebook from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import mixer from '../../assets/mixer.png';
import twitch from '../../assets/twitch.png';
import youtube from '../../assets/youtube.png';
import discord from '../../assets/discord.png';
const gamePage = ()=>{
    return (
            <div className="gamePageContainer">
                 <div className="gameCover">
                    <img alt="" src={PubG} style={{width:'100%',borderRadius:'2px'}}/>
                    <div style={{display:'flex',alignSelf:'flex-end'}}>
                    <button className="Btn">Learn More</button>
                    <button className="Btn">Play Now</button>
                    </div>
                 </div>
                 <div className="socialMediaHandles">
                    <p style={{fontSize:'20px',fontWeight:'bold',marginRight:'20px'}}>Social Media Handles</p>
                    <img alt="fb"  src={facebook} className="fb" />
                    <img alt="inst" src={insta} style={{margin:'10px'}} />
                    <img alt="twt" src={twitter} style={{margin:'10px'}} />
                    <img alt="YT"  src={youtube} style={{margin:'10px'}} />
                    <img alt="tch" src={twitch} style={{margin:'10px'}} />
                    <img alt="mxr"  src={mixer} style={{margin:'10px'}} />
                    <p className="discordText">Discord Community</p>
                    <img alt="dcrd" src={discord} className="discordImg" />
                 </div>
                 <div className="Youtube-Videos">
                    <h1 className="Video-Heading">How To Play/Tips & Tricks</h1>
                    <div className="video-container">
                        <div className="video">Video-1</div>
                        <div className="video">Video-2</div>
                        <div className="video">Video-3</div>
                    </div>
                 </div>
             </div>
              
          );
}

export default gamePage;