import React, { useState } from 'react';
import { FirebaseAppProvider, useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import ReactDOM from 'react-dom';
import BooksSuppliesForm from './BooksSuppliesForm';
import HousingForm, { submitHousingForm } from './HousingForm';
import FurnitureForm from './FurnitureForm';
import ServicesForm from './ServicesForm';

const NewListingForm = () => {
  const firebase = useFirebaseApp(); //pass denne ned til forms

  function changeForm(e) { //changes what forms are displayed based on category choice
    const form = document.getElementById("newListingForm");
    if (e.target.value === "housing") {
      ReactDOM.render(<FirebaseAppProvider><HousingForm /> </FirebaseAppProvider>, document.getElementById("completeListingForm"));
    } if (e.target.value === "books_and_supplies") {
      ReactDOM.render(<BooksSuppliesForm />, document.getElementById("completeListingForm"));
    } if (e.target.value === "furniture") {
      ReactDOM.render(<FurnitureForm />, document.getElementById("completeListingForm"));
    } if (e.target.value === "services") {
      ReactDOM.render(<ServicesForm />, document.getElementById("completeListingForm"));
    } if (e.target.value === "choose") {
      ReactDOM.render(chooseCategoryMessage, document.getElementById("completeListingForm"));
    }
    // document.getElementById("newListingForm").setAttribute("onSubmit", "test");
  };

  const chooseCategoryMessage = (
    <>
      <p>Please choose a category.</p>
    </>
  )

  const chosenCategory = document.getElementById("listingCategory");

  return (
    <>
      <div class="register">
        {/* needs to seperate forms. one for category choice and then one that is the actual form being turned in */}
        <form id="newListingForm">
          {/* onSubmit={submitForm} */}
          <label>Category</label>
          <select id="listingCategory" name="listingCategory" onChange={changeForm}>
            <option value="choose" default>Choose Option</option>
            <option value="housing">Housing</option>
            <option value="books_and_supplies">Books and supplies</option>
            <option value="furniture">Furniture</option>
            <option value="services">Services</option>
          </select>
        </form>
        <div id="completeListingForm">
          {/* the remaining form displayed here depends on category choice */}
        </div>
      </div>
    </>
  )
};

export default NewListingForm;