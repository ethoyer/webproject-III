import React from 'react';
import '../../App.css';
import CategoryButton from './CategoryButton'

//alle classNames er her de som kommer default når du lager en ny react app. CSS i App.css kom også som default og er ikke noe vi-
//kommer til å beholde.

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Social Integration Services</h1>
        <CategoryButton url="/" title="Mentorships"/>
        <CategoryButton url="/" title="Courses"/>
        <CategoryButton url="/browsemarket" title="Marketplace"/>
      </header>
    </div>
  )
}

export default Homepage;