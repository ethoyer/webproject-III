import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ImageWidget from './ImageWidget';
import { Form } from 'react-bootstrap';

const BooksSuppliesForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let booksAndSuppliesImages = []; //array holding all images user has uploaded

  const submitBooksAndSuppliesForm = async (e) => {
    e.preventDefault();
    firebase.firestore().collection("category").doc("books_and_supplies").collection("listings").doc().set({ //submits information to database
      seller: user.email,
      title: document.getElementById("booksSuppliesTitle").value,
      books: document.getElementById("listingbooks").value,
      supplies: document.getElementById("listingsupplies").value,
      condition: document.getElementById("itemConditionForm").value,
      country: document.getElementById("booksSuppliesCountry").value,
      city: document.getElementById("booksSuppliesCity").value,
      currency: document.getElementById("currencyBooksSuppliesForm").value,
      price: document.getElementById("booksSuppliesPrice").value,
      shipping: document.getElementById("booksSuppliesShippingForm").value,
      description: document.getElementById("booksSuppliesDescription").value,
      images: booksAndSuppliesImages
    })
      .then(result => {
        window.location = '/newlistingsuccess';
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <>
    <form onSubmit={submitBooksAndSuppliesForm}>
      <Form.Group>
        <Form.Label htmlFor="booksSuppliesTitle" className="formtitledescription">Title:</Form.Label>
        <Form.Control type="text" name="booksSuppliesTitle" id="booksSuppliesTitle" required />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="booksSuppliesCategory">Sub-category:</Form.Label>
        <Form.Check type="radio" id="listingbooks" name="booksSuppliesCategory" />
        <Form.Label for="listingbooks">Books</Form.Label>
        <Form.Check type="radio" id="listingsupplies" name="booksSuppliesCategory" />
        <Form.Label for="listingsupplies">Supplies</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="itemConditionForm">Condition:</Form.Label>
        <select name="itemConditionForm" id="itemConditionForm" required>
          <option value="conditionLikeNew" default>Like New</option>
          <option value="conditionSlightWear">Slight wear and tear</option>
          <option value="conditionNoticeableWear">Noticeable wear and tear</option>
        </select>
      </Form.Group>

      <p>Location</p>
      <Form.Group>
        <Form.Label htmlFor="booksSuppliesCountry">Country:</Form.Label>
        <Form.Control type="text" name="booksSuppliesCountry" id="booksSuppliesCountry" required />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="booksSuppliesCity">City:</Form.Label>
        <Form.Control type="text" name="booksSuppliesCity" id="booksSuppliesCity" required/>
      </Form.Group>
      
      <p>Payment Information</p>
      <Form.Group>
        <Form.Label htmlFor="currencyBooksSuppliesForm">Currency</Form.Label>
        <select id="currencyForm" name="currencyBooksSuppliesForm" id="currencyBooksSuppliesForm" required>
          <option value="EUR" default>EUR</option>
          <option value="USD">USD</option>
          <option value="NOK">NOK</option>
        </select>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="booksSuppliesPrice">Price:</Form.Label>
        <input type="number" name="booksSuppliesPrice" id="booksSuppliesPrice" required />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="booksSuppliesShippingForm">Shipping:</Form.Label>
        <Form.Check type="checkbox" name="booksSuppliesShipping" id="booksSuppliesShippingForm" />
        <Form.Label for="booksSuppliesShipping">Can be shipped</Form.Label>
        <Form.Check type="checkbox" id="booksSuppliesPickup" name="booksSuppliesPickup" />
        <Form.Label for="booksSuppliesPickup">Needs pick-up</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="booksSuppliesDescription" className="formtitledescription">Description:</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Write description here..." name="booksSuppliesDescription" id="booksSuppliesDescription" />
      </Form.Group>

        <ImageWidget imageArray={booksAndSuppliesImages} />

        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default BooksSuppliesForm;