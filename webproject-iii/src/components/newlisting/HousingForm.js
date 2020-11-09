import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import ReactDOM from 'react-dom';
import { useUser } from 'reactfire';

const HousingForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();

  const submitHousingForm = async (e) => {
    e.preventDefault();
    firebase.firestore().collection("category").doc("housing").collection("listings").doc().set({ //adds information to database
      seller: user.email,
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
      deposit: document.getElementById("housingDepositPrice").value
      // includedInRent: document.getElementById("housingIncludes").value
    })
      .then(result => {

      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <>
      <form onSubmit={submitHousingForm}>
        <p>Location</p>
        <label>Country:</label>
        <input type="text" name="housingCountry" id="housingCountry" required />
        <label>City:</label>
        <input type="text" name="housingCity" id="housingCity" required />
        <label>Street:</label>
        <input type="text" name="housingStreet" id="housingStreet" required />

        <p>Housing Information</p>
        <label>Housing type:</label>
        <select id="housingType" name="housingType" id="housingType" required>
          <option value="sharedHousing">Shared housing</option>
          <option value="studio apartment">studio apartment</option>
        </select>

        <label>Size(m<sup>2</sup>):</label>
        <input type="number" name="housingSize" id="housingSize" required />

        <label>Floor</label>
        <input type="text" name="housingFloor" id="housingFloor" required />

        <p>Rent Information</p>
        <label>Renting period</label>
        <select name="housingRentingPeriod" id="housingRentingPeriod" required>
          <option value="shortTermRent" default>Short Term</option>
          <option value="longTermRent">Long Term</option>
        </select>

        <label>Available from:</label>
        <input type="date" name="housingAvailableFromDate" id="housingAvailableFromDate" required />

        <label>Currency</label>
        <select id="currencyForm" name="currencyHousingForm" id="currencyHousingForm" required >
          <option value="currencyFormEUR" default>EUR</option>
          <option value="currencyFormUSD">USD</option>
          <option value="currencyFormNOK">NOK</option>
        </select>
        <label>Monthly rent:</label>
        <input type="number" name="hosingRentPrice" id="housingRentPrice" required />
        <label>Deposit</label>
        <input type="number" name="housingDepositPrice" id="housingDepositPrice" required />

        {/* <label>Included in rent:</label>
    <checkbox name="housingIncludes" id="housingIncludes" required >
      <option value="hosuingIncludesCable">TV-Cable</option>
      <option value="hosuingIncludesInternet">Internet</option>
      <option value="hosuingIncludesEnergy">Energyy</option>
      <option value="hosuingIncludesWater">Water</option>
      <option value="hosuingIncludesFurnished">Furnished</option>
      <option value="hosuingIncludesUnfurnished">Unfurnished</option>
    </checkbox> */}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default HousingForm;