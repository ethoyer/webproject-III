import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import ReactDOM from 'react-dom';

const NewListingForm = () => {
  let registerUser = false; //used to keep track of whether account is successfully registered or not

  const [user, setUser] = useState({
    email: '',
    password: '',
    fname: '',
    lname: '',
    dob: '',
    country: '',
    city: '',
    phoneno: '',
    error: '',
  });

  const firebase = useFirebaseApp();

  const changeStateOnInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: '',
    })
    console.log(user.fname);
  };

  // Submit function (Create account)
  const registerSubmit = async (e) => {
    e.preventDefault();
    //signs up account to firebase
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(result => {
        //add information to user cloudstore here

        firebase.firestore().collection("users").doc(user.email).set({
          fname: user.fname,
          lname: user.lname,
          dob: user.dob,
          country: user.country,
          city: user.city,
          phoneno: user.phoneno
        })
          .then(result => {
            //redirects after user has been successfully registered
            registerUser = true;
            if (registerUser === true) {
              window.location = '/registersuccess';
            }
          })
          .catch(error => {
            console.log(error.message)
          })
      })
  }

  function changeForm(e) {
    let value = e.target.value;
    console.log(value);
    if (e.target.value === "housing") {
      ReactDOM.render(housingForm, document.getElementById("completeListingForm"));
    } if (e.target.value === "books_and_supplies") {
      ReactDOM.render(booksSuppliesForm, document.getElementById("completeListingForm"));
    } if (e.target.value === "furniture") {
      ReactDOM.render(furnitureForm, document.getElementById("completeListingForm"));
    } if (e.target.value === "services") {
      ReactDOM.render(furnitureForm, document.getElementById("completeListingForm"));
    } if (e.target.value === "choose") {
      ReactDOM.render(chooseCategoryMessage, document.getElementById("completeListingForm"));
    }
  };

  const housingForm = (
    <>
      <p>Location</p>
      <label>Country:</label>
      <input type="text" placeholder="housingCountry" name="housingCountry" onChange={changeStateOnInput} />
      <label>City:</label>
      <input type="text" placeholder="housingCity" name="housingCity" onChange={changeStateOnInput} />
      <label>Street:</label>
      <input type="text" placeholder="housingStreet" name="housingStreet" onChange={changeStateOnInput} required />

      <label>Housing type:</label>
      <select id="housingType" name="housingType" onChange={changeForm}>
        <option value="choose" default>Choose Option</option>
        <option value="sharedHousing">Shared housing</option>
        <option value="studio apartment">studio apartment</option>
      </select>

      <label>Size(m<sup>2</sup>):</label>
      <input type="number" placeholder="27" name="housingSize" onChange={changeStateOnInput} required />

      <button type="submit">Submit</button>
    </>
  )

  const booksSuppliesForm = (
    <>
      <label>Sub-category:</label>
      <input type="radio" id="listingbooks" name="listingbooks" value="books" />
      <label for="male">Books</label>
      <input type="radio" id="listingsupplies" name="listingsupplies" value="supplies" />
      <label for="female">Supplies</label>

      <label>Title</label>
      <input type="text" placeholder="title" name="booksSuppliesTitle" onChange={changeStateOnInput} />

      <label>Currency</label>
      <select id="currencyForm" name="currencyForm" onChange={changeForm}>
        <option value="currencyFormEUR" default>EUR</option>
        <option value="currencyFormUSD">USD</option>
        <option value="currencyFormNOK">NOK</option>
      </select>
      <label>Price</label>
      <input type="numbers" placeholder="currencyPrice" name="currencyPrice" onChange={changeStateOnInput} />

      <label>Condition</label>
      <select id="itemConditionForm" name="itemConditionForm" onChange={changeForm}>
        <option value="conditionLikeNew" default>Like New</option>
        <option value="conditionSlightWear">Slight wear and tear</option>
        <option value="conditionNoticeableWear">Noticeable wear and tear</option>
      </select>

      <p>Location</p>
      <label>Country:</label>
      <input type="text" placeholder="booksSuppliesCountry" name="booksSuppliesCountry" onChange={changeStateOnInput} />
      <label>City:</label>
      <input type="text" placeholder="booksSupplieshousingCity" name="booksSuppliesCity" onChange={changeStateOnInput} />

      <p>Shipping</p>
      <input type="checkbox" id="booksSuppliesShipping" name="booksSuppliesShipping" value="Car" />
      <label for="vehicle2">Can be shipped</label>
      <input type="checkbox" id="booksSuppliesPickup" name="booksSuppliesPickup" value="Boat" />
      <label for="vehicle3">Needs pick-up</label>

      <label>Description:</label>
      <input type="text" placeholder="Write description here..." name="booksSuppliesTitle" onChange={changeStateOnInput} />

      <label>Upload images</label>

      <button type="submit">Submit</button>
    </>
  )

  const furnitureForm = (
    <>
      <p>Location</p>
      <label>Country:</label>
      <input type="text" placeholder="housingCountry" name="housingCountry" onChange={changeStateOnInput} />
      <label>City:</label>
      <input type="text" placeholder="housingCity" name="housingCity" onChange={changeStateOnInput} />

      <button type="submit">Submit</button>
    </>
  )

  const chooseCategoryMessage = (
    <>
      <p>Please choose a category.</p>
    </>
  )



  return (
    <>
      <div class="register">
        <form onSubmit={registerSubmit}>
          <label>Category</label>
          <select id="listingCategory" name="listingCategory" onChange={changeForm}>
            <option value="choose" default>Choose Option</option>
            <option value="housing">Housing</option>
            <option value="books_and_supplies">Books and supplies</option>
            <option value="furniture">Furniture</option>
            <option value="services">Services</option>
          </select>
          <div id="completeListingForm">

          </div>
        </form>
        {user.error && <h4>{user.error}</h4>}
      </div>
    </>
  )
};

export default NewListingForm;