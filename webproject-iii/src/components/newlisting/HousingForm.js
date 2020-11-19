import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ImageWidget from './ImageWidget';
import { Form, Button } from 'react-bootstrap';

const HousingForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let housingImages = []; //array holding all images user has uploaded

  const submitHousingForm = async (e) => {
    e.preventDefault();
    if (housingImages.length === 0) {
      housingImages = 'https://res.cloudinary.com/dysv4qjk7/image/upload/v1605793088/no_image_raloja.png';
    };
    firebase.firestore().collection("category").doc("housing").collection("listings").doc().set({ //submits information to database
      seller: user.email,
      title: document.getElementById("housingTitle").value,
      country: document.getElementById("housingCountry").value,
      city: document.getElementById("housingCity").value,
      street: document.getElementById("housingStreet").value,
      housingType: document.getElementById("housingType").value,
      size: document.getElementById("housingSize").value,
      floor: document.getElementById("housingFloor").value,
      rentingPeriod: document.getElementById("housingRentingPeriod").value,
      availableFrom: document.getElementById("housingAvailableFromDate").value,
      currency: document.getElementById("currencyHousingForm").value,
      monthlyRent: document.getElementById("housingRentPrice").value,
      deposit: document.getElementById("housingDepositPrice").value,
      description: document.getElementById("housingDescription").value,
      images: housingImages
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
      <form className="form" onSubmit={submitHousingForm}>
        <Form.Group>
          <Form.Label htmlFor="housingTitle" className="formtitledescription">Title:</Form.Label>
          <Form.Control type="text" name="housingTitle" id="housingTitle" required />
        </Form.Group>
        <p>Location</p>
        <Form.Group>
          <Form.Label htmlFor="housingCountry">Country:</Form.Label>
          <Form.Control type="text" name="housingCountry" id="housingCountry" required />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="housingCity">City:</Form.Label>
          <Form.Control type="text" name="housingCity" id="housingCity" required />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="housingStreet">Street:</Form.Label>
          <Form.Control type="text" name="housingStreet" id="housingStreet" required />
        </Form.Group>

        <p>Housing Information</p>
        <Form.Group>
          <Form.Label htmlFor="housingType">Housing type:</Form.Label>
          <Form.Control as="select" id="housingType" name="housingType" required>
            <option value="sharedHousing">Shared housing</option>
            <option value="studio apartment">studio apartment</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="housingSize">Size(m<sup>2</sup>):</Form.Label>
          <Form.Control type="number" name="housingSize" id="housingSize" required />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="housingFloor">Floor:</Form.Label>
          <Form.Control type="number" name="housingFloor" id="housingFloor" required />
        </Form.Group>

        <p>Rent Information</p>
        <Form.Group>
          <Form.Label htmlFor="housingRentingPeriod">Renting period:</Form.Label>
          <Form.Control as="select" name="housingRentingPeriod" id="housingRentingPeriod" required>
            <option value="short term" default>Short Term</option>
            <option value="long term">Long Term</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="housingAvailableFromDate">Available from:</Form.Label>
          <Form.Control type="date" name="housingAvailableFromDate" id="housingAvailableFromDate" required />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="currencyHousingForm">Currency:</Form.Label>
          <Form.Control as="select" name="currencyHousingForm" id="currencyHousingForm" required>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="NOK">NOK</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="hosingRentPrice" >Monthly rent:</Form.Label>
          <Form.Control type="number" name="hosingRentPrice" id="housingRentPrice" required />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="housingDepositPrice" >Deposit:</Form.Label>
          <Form.Control type="number" name="housingDepositPrice" id="housingDepositPrice" required />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="housingDescription" className="formtitledescription">Description:</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Write description here..." name="housingDescription" id="housingDescription" />
        </Form.Group>

        <ImageWidget imageArray={housingImages} />

        <Button className="btn btn-primary" type="submit">Submit</Button>
      </form>
    </>
  )
}

export default HousingForm;