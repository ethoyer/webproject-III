import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import ReactDOM from 'react-dom';

const ServicesForm = () => {
  return (
  <>
    <p>Location</p>
    <label>Country:</label>
    <input type="text" placeholder="housingCountry" name="housingCountry"  />
    <label>City:</label>
    <input type="text" placeholder="housingCity" name="housingCity"  />

    <button type="submit">Submit</button>
  </>
  )
}

export default ServicesForm;