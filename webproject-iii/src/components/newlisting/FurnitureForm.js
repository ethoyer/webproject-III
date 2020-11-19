import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ImageWidget from './ImageWidget';
import { Form, Button } from 'react-bootstrap';

const FurnitureForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let furnitureImages = []; //array holding all images user has uploaded

  const submitFurnitureForm = async (e) => {
    e.preventDefault();
    firebase.firestore().collection("category").doc("furniture").collection("listings").doc().set({ //submits information to database
      seller: user.email,
      title: document.getElementById("furnitureTitle").value,
      country: document.getElementById("furnitureCountry").value,
      city: document.getElementById("furnitureCity").value,
      furnitureCategory: document.getElementById("furnitureCategory").value,
      currency: document.getElementById("currencyFurnitureForm").value,
      price: document.getElementById("furniturePrice").value,
      condition: document.getElementById("furnitureCondition").value,
      shipping: document.getElementById("furnitureShippingForm").value,
      description: document.getElementById("furnitureDescription").value,
      images: furnitureImages
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
    <form className="form" onSubmit={submitFurnitureForm}>
      <Form.Group>
        <Form.Label htmlFor="furnitureTitle" className="formtitledescription">Title:</Form.Label>
        <Form.Control type="text" id="furnitureTitle" name="furnitureTitle" required />
      </Form.Group>

      <p>Location</p>
      <Form.Group>
        <Form.Label htmlFor="furnitureCountry">Country: </Form.Label>
        <Form.Control type="text" id="furnitureCountry" name="furnitureCountry" required />
        <Form.Label htmlFor="furnitureCity">City: </Form.Label>
        <Form.Control type="text" id="furnitureCity" name="furnitureCity" required />
      </Form.Group>

      <p>Furniture Information</p>
      <Form.Group>
        <Form.Label htmlFor="furnitureCategory">Sub-category:</Form.Label>
        <Form.Control as="select" id="furnitureCategory" name="furnitureCategory" required>
          <option value="chairTables">Chairs &amp; Tables</option>
          <option value="wardrobes">Wardrobes</option>
          <option value="cabinetClosets">Cabinets &amp; Closets</option>
          <option value="chairTables">Chairs &amp; Tables</option>
          <option value="beds">Beds &amp; Mattresses</option>
          <option value="shelfs">Bookcases &amp; Shelving</option>
          <option value="desks">Home desks</option>
          <option value="kitchen">Kitchen &amp; Dining</option>
          <option value="sofas">Sofas &amp; Couches</option>
          <option value="carpets">Carpets</option>
          <option value="decor">Home décor</option>
          <option value="other">Other Home Furniture</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="furnitureCondition">Condition:</Form.Label>
        <Form.Control as="select" id="furnitureCondition" name="furnitureCondition" required >
          <option value="conditionLikeNew" default>Like New</option>
          <option value="conditionSlightWear">Slight wear and tear</option>
          <option value="conditionNoticeableWear">Noticeable wear and tear</option>
        </Form.Control>
      </Form.Group>
      <p>Payment &amp; Shipping options</p>
      <Form.Group>
        <Form.Label htmlFor="currencyFurnitureForm">Currency:</Form.Label>
        <Form.Control as="select" name="currencyFurnitureForm" id="currencyFurnitureForm" required>
          <option value="EUR">EUR</option> 
          <option value="USD">USD</option>
          <option value="NOK">NOK</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="furniturePrice">Price:</Form.Label>
        <Form.Control type="number" name="furniturePrice" id="furniturePrice" required />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="furnitureShippingForm">Shipping:</Form.Label>
        <Form.Check type="radio" id="furnitureShippingForm" label="Can be shipped" name="furnitureShipping" /> 
        <Form.Check type="radio" id="furniturePickup" label="Needs pick-up" name="furniturePickup" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="furnitureDescription" className="formtitledescription">Description:</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Write description here..." name="furnitureDescription" id="furnitureDescription" />
      </Form.Group>

        <ImageWidget imageArray={furnitureImages} />

        <Button type="submit">Submit</Button>
    </form>
  </>
  )
}

export default FurnitureForm;