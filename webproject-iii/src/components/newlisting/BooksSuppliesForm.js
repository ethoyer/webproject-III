import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ImageWidget from './ImageWidget';

const BooksSuppliesForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let booksAndSuppliesImages = []; //array holding all images user has uploaded

  const submitBooksAndSuppliesForm = async (e) => {
    e.preventDefault();
    firebase.firestore().collection("category").doc("books_and_supplies").collection("listings").doc().set({ //submits information to database
      seller: user.email,
      //information to add goes here
      images: booksAndSuppliesImages
    })
      .then(result => {

      })
      .catch(error => {
      })
  }



  return (
    <>
      <label>Sub-category:</label>
      <input type="radio" id="listingbooks" name="listingbooks" value="books" />
      <label for="male">Books</label>
      <input type="radio" id="listingsupplies" name="listingsupplies" value="supplies" />
      <label for="female">Supplies</label>

      <label htmlFor="booksSuppliesTitle">Title</label>
      <input type="text" placeholder="title" name="booksSuppliesTitle" />

      <label htmlFor="currencyForm">Currency</label>
      <select id="currencyForm" name="currencyForm" >
        <option value="currencyFormEUR" default>EUR</option>
        <option value="currencyFormUSD">USD</option>
        <option value="currencyFormNOK">NOK</option>
      </select>
      <label htmlFor="currencyPrice">Price</label>
      <input type="numbers" placeholder="currencyPrice" name="currencyPrice" />

      <label htmlFor="itemConditionForm">Condition</label>
      <select id="itemConditionForm" name="itemConditionForm" >
        <option value="conditionLikeNew" default>Like New</option>
        <option value="conditionSlightWear">Slight wear and tear</option>
        <option value="conditionNoticeableWear">Noticeable wear and tear</option>
      </select>

      <p>Location</p>
      <label htmlFor="booksSuppliesCountry">Country:</label>
      <input type="text" placeholder="booksSuppliesCountry" name="booksSuppliesCountry" />
      <label htmlFor="booksSupplieshousingCity">City:</label>
      <input type="text" placeholder="booksSupplieshousingCity" name="booksSuppliesCity" />

      <p>Shipping</p>
      <input type="checkbox" id="booksSuppliesShipping" name="booksSuppliesShipping" value="Car" />
      <label htmlFor="booksSuppliesShipping">Can be shipped</label>
      <input type="checkbox" id="booksSuppliesPickup" name="booksSuppliesPickup" value="Boat" />
      <label htmlFor="booksSuppliesPickup">Needs pick-up</label>

      <label htmlFor="booksSuppliesDescription">Description:</label>
      <input type="text" placeholder="Write description here..." name="booksSuppliesDescription" />

      <ImageWidget imageArray={booksAndSuppliesImages} />

      <button type="submit">Submit</button>
    </>
  )
}

export default BooksSuppliesForm;