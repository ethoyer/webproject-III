import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ImageWidget from './ImageWidget';

const ServicesForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let servicesImages = []; //array holding all images user has uploaded

  const submitServicesForm = async (e) => {
    e.preventDefault();
    firebase.firestore().collection("category").doc("services").collection("listings").doc().set({ //submits information to database
      seller: user.email,
      //information to add goes here
      images: servicesImages
    })
      .then(result => {

      })
      .catch(error => {
      })
  }

  return (
  <>
    <p>Location</p>
    <label>Country:</label>
    <input type="text" placeholder="housingCountry" name="housingCountry"  />
    <label>City:</label>
    <input type="text" placeholder="housingCity" name="housingCity"  />

    <ImageWidget imageArray={servicesImages} />

    <button type="submit">Submit</button>
  </>
  )
}

export default ServicesForm;