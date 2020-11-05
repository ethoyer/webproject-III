import React from 'react';
import './marketplace.css';
import '../../App.css';
import CategoryButton from '../homepage/CategoryButton'

function Categories() {
    return (
      <>
      <div className="Categories">
          <div class="cat1"><CategoryButton url="/marketplace" title="Housing"/></div>
          <div class="cat2"><CategoryButton url="/browsemarket" title="Books & Supplies"/></div>
          <div class="cat3"><CategoryButton url="/marketplace" title="Furniture"/></div>
          <div class="cat4"><CategoryButton url="/marketplace" title="Services"/></div>
      </div>
      </>
    )
  }
  
  export default Categories;