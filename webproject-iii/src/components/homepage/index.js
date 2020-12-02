import React from 'react';
import '../../App.css';
import CategoryButton from './CategoryButton'



function Homepage() {
  return (
    <div id="homepage">
      <h1>Social Integration Services</h1>
      <div>
        <CategoryButton url="" title="Mentorships (TBA)" />
        <CategoryButton url="" title="Courses (TBA)" />
        <CategoryButton url="/browsemarket" title="Marketplace" />
      </div>
    </div>
  )
}

export default Homepage;
