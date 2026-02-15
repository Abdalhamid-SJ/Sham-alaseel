import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import myImage from "./assets/icons/final.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Sham Al-Aseel L.L.C</a>
             
            
          
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
           
          </div>
        </div>
          <div className='sham'> 
            <img src={myImage} alt="My Local" width={400} height={300} /></div>
        <div className="content">

           
          <div className="title-holder">
            
            <h1>Get ready for the change.</h1>
            <p>Website coming soon.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;