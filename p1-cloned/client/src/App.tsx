import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import TextRight from './MainTextRight/TextRight';

class Root extends Component {
  render() {    
    return (
      <div className="App">
        <link href='https://fonts.googleapis.com/css?family=Italianno' rel='stylesheet' type='text/css'></link>
        
        <header className="App-header">
          <h1>Welcome to A Taste of Italy!</h1>
          <div className="App-header-flags">
            <div className="aside1">
              <aside>
                <img src="https://media4.giphy.com/media/kdL8euI0SrIDTFA0rv/giphy.gif" alt="Italian Flag"></img>
              </aside>
            </div>
              <div className="Welcome-message">
                <a href="https://www.visititaly.eu/"><h2>Visit Italy</h2></a>
              </div> 
            <div className="aside2">        
              <aside>
                <img src="https://media4.giphy.com/media/kdL8euI0SrIDTFA0rv/giphy.gif" alt="Italian Flag"></img>
              </aside>
            </div> 
          </div>
        </header>
        <body>
          <section className="Maintext">
            <img src="https://media3.giphy.com/media/TGuYqKn46XwE8qTpWy/giphy.gif?cid=ecf05e47r39cjnaqoqmctqskzmquedvzralkkpmwz6e8fzta&rid=giphy.gif" alt="Roman Colosseum" />
            <TextRight />
          </section>               
      </body>
      <footer>
        <Person /> 
      </footer>
      </div>
    )
    
   //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, Does This Work Better?'))
  }
}
/*
function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Welcome-message">
          <h2>Welcome To React!!</h2>
        </div>
        <img id="earthlogo" src="https://www.uidownload.com/files/442/743/719/globe-browser-earth-world-planet-icon.png" className="App-logo" alt="logo" />
        <p>This is our Earth. The Earth rotates at a speed of roughly 1,000 miles per hour!</p> 
        
      
      </header>
    </div>
  );
}
*/
export default Root;
