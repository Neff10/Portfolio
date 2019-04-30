import React from 'react';
import './App.css';
import pageimage from './pageimage.jpg';

function App() {
  return (
    <div className='container' img src={pageimage} alt="Background" >
      <div className='details'>
        <div class='fullName'>
          <h1>Suleman <br/> Tunkara</h1>
          <p class='description'>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
