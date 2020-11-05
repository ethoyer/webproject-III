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
        <div class="categories">
          <div class="mentor"><CategoryButton url="/" title="Mentorships"/></div>
          <div class="courses"><CategoryButton url="/" title="Courses"/></div>
          <div class="market"><CategoryButton url="/marketplace" title="Marketplace"/></div>
        </div>
      </header>
    </div>
  )
}

export default Homepage;