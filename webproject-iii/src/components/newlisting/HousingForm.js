import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ImageWidget from './ImageWidget';

const HousingForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let housingImages = []; //array holding all images user has uploaded

  const submitHousingForm = async (e) => {
    e.preventDefault();
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
      // includedInRent: document.getElementById("housingIncludes").value
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
      <form onSubmit={submitHousingForm}>
      <label htmlFor="housingTitle">Country:</label>
        <input type="text" name="housingTitle" id="housingTitle" required />
        <p>Location</p>
        <label htmlFor="housingCountry">Country:</label>
        <input type="text" name="housingCountry" id="housingCountry" required />
        <label htmlFor="housingCity">City:</label>
        <input type="text" name="housingCity" id="housingCity" required />
        <label htmlFor="housingStreet">Street:</label>
        <input type="text" name="housingStreet" id="housingStreet" required />

        <p>Housing Information</p>
        <label htmlFor="housingType">Housing type:</label>
        <select id="housingType" name="housingType" id="housingType" required>
          <option value="sharedHousing">Shared housing</option>
          <option value="studio apartment">studio apartment</option>
        </select>

        <label htmlFor="housingSize">Size(m<sup>2</sup>):</label>
        <input type="number" name="housingSize" id="housingSize" required />

        <label htmlFor="housingFloor">Floor</label>
        <input type="text" name="housingFloor" id="housingFloor" required />

        <p>Rent Information</p>
        <label htmlFor="housingRentingPeriod">Renting period</label>
        <select name="housingRentingPeriod" id="housingRentingPeriod" required>
          <option value="shortTermRent" default>Short Term</option>
          <option value="longTermRent">Long Term</option>
        </select>

        <label htmlFor="housingAvailableFromDate">Available from:</label>
        <input type="date" name="housingAvailableFromDate" id="housingAvailableFromDate" required />

        <label htmlFor="currencyHousingForm">Currency</label>
        <select id="currencyForm" name="currencyHousingForm" id="currencyHousingForm" required>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="NOK">NOK</option>
        </select>
        <label htmlFor="hosingRentPrice" >Monthly rent:</label>
        <input type="number" name="hosingRentPrice" id="housingRentPrice" required />
        <label htmlFor="housingDepositPrice" >Deposit</label>
        <input type="number" name="housingDepositPrice" id="housingDepositPrice" required />

        <label htmlFor="housingDescription">Description:</label>
      <input type="text" placeholder="Write description here..." name="housingDescription" id="housingDescription" />

        {/* <label>Included in rent:</label>
    <checkbox name="housingIncludes" id="housingIncludes" required >
      <option value="hosuingIncludesCable">TV-Cable</option>
      <option value="hosuingIncludesInternet">Internet</option>
      <option value="hosuingIncludesEnergy">Energyy</option>
      <option value="hosuingIncludesWater">Water</option>
      <option value="hosuingIncludesFurnished">Furnished</option>
      <option value="hosuingIncludesUnfurnished">Unfurnished</option>
    </checkbox> */}

        <ImageWidget imageArray={housingImages} />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default HousingForm;