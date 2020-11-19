import React from 'react';
import { FirebaseAppProvider } from 'reactfire';
import {Form} from 'react-bootstrap';
import 'firebase/auth';
import "firebase/firestore";
import ReactDOM from 'react-dom';
import BooksSuppliesForm from './BooksSuppliesForm';
import HousingForm from './HousingForm';
import FurnitureForm from './FurnitureForm';
import ServicesForm from './ServicesForm';

const NewListingForm = () => {

  function changeForm(e) { //changes what forms are displayed based on category choice
    if (e.target.value === "housing") {
      ReactDOM.render(<FirebaseAppProvider><HousingForm /> </FirebaseAppProvider>, document.getElementById("completeListingForm"));
    } if (e.target.value === "books_and_supplies") {
      ReactDOM.render(<FirebaseAppProvider><BooksSuppliesForm /></FirebaseAppProvider>, document.getElementById("completeListingForm"));
    } if (e.target.value === "furniture") {
      ReactDOM.render(<FirebaseAppProvider><FurnitureForm /></FirebaseAppProvider>, document.getElementById("completeListingForm"));
    } if (e.target.value === "services") {
      ReactDOM.render(<FirebaseAppProvider><ServicesForm /></FirebaseAppProvider>, document.getElementById("completeListingForm"));
    } if (e.target.value === "choose") {
      ReactDOM.render(chooseCategoryMessage, document.getElementById("completeListingForm"));
    }
  };

  const chooseCategoryMessage = (
    <>
      <p>Please choose a category.</p>
    </>
  )

  return (
    <>
      <div className=".formBox">
        {/* needs to seperate forms. one for category choice and then one that is the actual form being turned in */}
        <form id="newListingForm" className="form">
          {/* onSubmit={submitForm} */}
          <label>Category </label>
          <Form.Control as="select" id="listingCategory" name="listingCategory" onChange={changeForm}>
            <option value="choose" default>Choose Option</option>
            <option value="housing">Housing</option>
            <option value="books_and_supplies">Books and supplies</option>
            <option value="furniture">Furniture</option>
            <option value="services">Services</option>
          </Form.Control>
        </form>
        <div id="completeListingForm">
          {/* the remaining form displayed here depends on category choice */}
        </div>
      </div>
    </>
  )
};

export default NewListingForm;