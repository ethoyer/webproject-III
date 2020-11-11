import React from 'react';
import '../../App.css';
import CategoryButton from '../homepage/CategoryButton'
import '../../src/components/header.css'


function Categories() {
    return (
      <>
      <div className="Categories">
          <CategoryButton url="/marketplace" title="Housing"/>
          <CategoryButton url="/browsemarket" title="Books and Supplies"/>
          <CategoryButton url="/marketplace" title="Furniture"/>
          <CategoryButton url="/marketplace" title="Services"/>
      </div>
      </>
    )
  }
  
  export default Categories;
