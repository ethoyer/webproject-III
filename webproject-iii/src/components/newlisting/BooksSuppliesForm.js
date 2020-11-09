import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import ReactDOM from 'react-dom';

const BooksSuppliesForm =() => {

  

  return(
  <>
    <label>Sub-category:</label>
    <input type="radio" id="listingbooks" name="listingbooks" value="books" />
    <label for="male">Books</label>
    <input type="radio" id="listingsupplies" name="listingsupplies" value="supplies" />
    <label for="female">Supplies</label>

    <label>Title</label>
    <input type="text" placeholder="title" name="booksSuppliesTitle"  />

    <label>Currency</label>
    <select id="currencyForm" name="currencyForm" >
      <option value="currencyFormEUR" default>EUR</option>
      <option value="currencyFormUSD">USD</option>
      <option value="currencyFormNOK">NOK</option>
    </select>
    <label>Price</label>
    <input type="numbers" placeholder="currencyPrice" name="currencyPrice"  />

    <label>Condition</label>
    <select id="itemConditionForm" name="itemConditionForm" >
      <option value="conditionLikeNew" default>Like New</option>
      <option value="conditionSlightWear">Slight wear and tear</option>
      <option value="conditionNoticeableWear">Noticeable wear and tear</option>
    </select>

    <p>Location</p>
    <label>Country:</label>
    <input type="text" placeholder="booksSuppliesCountry" name="booksSuppliesCountry"  />
    <label>City:</label>
    <input type="text" placeholder="booksSupplieshousingCity" name="booksSuppliesCity"  />

    <p>Shipping</p>
    <input type="checkbox" id="booksSuppliesShipping" name="booksSuppliesShipping" value="Car" />
    <label for="vehicle2">Can be shipped</label>
    <input type="checkbox" id="booksSuppliesPickup" name="booksSuppliesPickup" value="Boat" />
    <label for="vehicle3">Needs pick-up</label>

    <label>Description:</label>
    <input type="text" placeholder="Write description here..." name="booksSuppliesTitle"  />

    <label>Upload images</label>

    <button type="submit">Submit</button>
  </>
  )
}

export default BooksSuppliesForm;