import React from 'react';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    
    <html>
      <head>
      </head>
      <body id="backimg">
        <header>
          <div className='menuButton'>
            <div className='buttonLine'></div>
            <div className='buttonLine'></div>
            <div className='buttonLine'></div>
          </div>
          <nav className='menu'>
            <div className='menuBranding'>
              <div className='portrait'></div>
            </div>
            <ul className='menuNav'>
              <li className='navItem'>
                <a href='/' className='navLink'>
                  Home
          </a>
              </li>
              <li className='navItem'>
                <a href='/' className='navLink'>
                  About Me
          </a>
              </li>
              <li className='navItem'>
                <a href='/' className='navLink'>
                  Portfolio
          </a>
              </li>
              <li className='navItem'>
                <a href='/' className='navLink'>
                  Contact
          </a>
              </li>
            </ul>
          </nav>
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
      </body>
    </html>
  );
}


export default App;
