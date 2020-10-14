import React from 'react';
import './App.css';
import logo from './logo.svg';

//alle classNames er her de som kommer default når du lager en ny react app. CSS i App.css kom også som default og er ikke noe vi-
//kommer til å beholde.

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Social Integration Services</h1>
        <a className="App-link" href="/marketplace" target="_blank" rel="noopener noreferrer"> Marketplace</a>
      </header>
    </div>
  )
}

export default Homepage;