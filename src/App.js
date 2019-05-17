import './App.scss';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showMenu: false
    };
  }

  render() {
    return (
      <div className='all'>
        <div className='body'>
          <div className="backimg">
            <header>
              <nav role="navigation">
                <div id="menuToggle">
                  <input type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul id="menu">
                    <b href="#"><li>Home</li></b>
                    <b href="#"><li>About</li></b>
                    <b href="#"><li>Info</li></b>
                    <b href="#"><li>Contact</li></b>
                  </ul>
                </div>
              </nav>
              <div className='footer'>Hello World</div>
            </header>
            <main id='home'>
              <h1 className='name'>
                Suleman
            <span className='surname'> Tunkara</span>
              </h1>
              <h2 className='description'>Pokemon Trainer</h2>
              <div className='icons'>
                <a href='#!'>
                  <i className="fa fa-linkedin-square fa-2x"></i>
                </a>
                <a href='#!'>
                  <i className="fa fa-github-square fa-2x"></i>
                </a>
                <a href='#!'>
                  <i className="fa fa fa fa-free-code-camp fa-2x"></i>
                </a>
                <a href='#!'>
                  <i className="fa fa fa-slack fa-2x"></i>
                </a>
              </div>
            </main>
          </div>
        </div >
      </div >
    );
  }
}

export default App;
