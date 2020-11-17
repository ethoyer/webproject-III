import React from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "firebase/firestore";
import { useUser } from 'reactfire';
import ImageWidget from './ImageWidget';
import { Form } from 'react-bootstrap';

const ServicesForm = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  let servicesImages = []; //array holding all images user has uploaded

  const submitServicesForm = async (e) => {
    e.preventDefault();
    firebase.firestore().collection("category").doc("services").collection("listings").doc().set({ //submits information to database
      seller: user.email,
      title: document.getElementById("serviceTitle"),
      country: document.getElementById("serviceCountry").value,
      city: document.getElementById("serviceCity").value,
      serviceType: document.getElementById("serviceType").value,
      description: document.getElementById("serviceDescription").value,
      images: servicesImages
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
    <form onSubmit={submitServicesForm}>
      <Form.Group>
        <Form.Label htmlFor="serviceTitle" className="formtitledescription">Title:</Form.Label>
        <Form.Control type="text" name="serviceTitle" id="serviceTitle" required />
      </Form.Group>
      <p>Location</p>
      <Form.Group>  
        <Form.Label htmlFor="serviceCountry">Country:</Form.Label>
        <Form.Control type="text" id="serviceCountry" name="serviceCountry" required />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="serviceCity">City:</Form.Label>
        <Form.Control type="text" id="serviceCity" name="serviceCity" required />
      </Form.Group>
      <p>Service Information</p>
      <Form.Group>
        <Form.Label htmlFor="serviceType">Service Type:</Form.Label>
        <select name="serviceType" id="serviceType" required>
          <option value="tutor">Tutor</option>
          <option value="Campus Guide">Campus Guide</option>
          <option value="AplicationSupport">Application Support</option>
          <option value="Activities">Activities</option>
          <option value="Travels">Travel Guide</option>
        </select>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="serviceDescription" className="formtitledescription">Description:</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Write description here..." name="serviceDescription" id="serviceDescription" />
      </Form.Group>

        <ImageWidget imageArray={servicesImages} />

        <button type="submit">Submit</button>
    </form>
  </>
  )
}

export default ServicesForm;