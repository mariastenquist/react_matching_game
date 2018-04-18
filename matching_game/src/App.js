import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./components/Image.js";
import Game from "./components/Game";


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Welcome to SheepLand</h1>
      </header>
      <div className="components">
      <Game />
      <Image />
      </div>
      {/* //stick components here */}
    </div>
  );
}

export default App;


// import React from "react";
// import Game from "./components/Game";
// // import Click from "./components/Click";
// const App = () => (
//   <div>
//   <Game /> 
//   <Image />
//   </div>
// )
// export default App;