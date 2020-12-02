import React from 'react';
import '../../App.css';
import CategoryButton from './CategoryButton';
import { Link } from 'react-router-dom';



function Homepage() {
  return (
    <div id="homepage">
      <h1>Social Integration Services</h1>
      <div>
        <CategoryButton url="" title="Mentorships (TBA)" />
        <CategoryButton url="" title="Courses (TBA)" />
        <CategoryButton url="/browseMarket" title="Marketplace" />
      </div>
    </div>
  )
}

export default Homepage;
